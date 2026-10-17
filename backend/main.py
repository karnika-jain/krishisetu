"""KrishiSetu backend. Run: uvicorn main:app --reload   (from the backend folder)
Sarvam endpoints used (checked against docs.sarvam.ai, Oct 2026):
  POST /translate (JSON), POST /text-to-speech (JSON), POST /speech-to-text (multipart).
The API key stays here on the server, read from backend/.env. It never goes to the browser."""
import json, os
from pathlib import Path

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

ROOT = Path(__file__).parent
load_dotenv(ROOT / ".env")
KEY = os.getenv("SARVAM_API_KEY", "")
BASE = "https://api.sarvam.ai"
HEAD = {"api-subscription-key": KEY}
SCHEMES = json.loads((ROOT / "schemes.json").read_text(encoding="utf-8"))
LABELS = ["Why this match?", "Documents to prepare", "Next steps", "Potential matches only. Not an official decision."]

app = FastAPI()


def need_key():
    if not KEY:
        raise HTTPException(503, "SARVAM_API_KEY is missing. Add it to backend/.env and restart.")


async def translate(text, lang):
    if not text or lang == "en-IN":
        return text
    need_key()
    async with httpx.AsyncClient(timeout=30) as c:
        r = await c.post(f"{BASE}/translate", headers=HEAD, json={
            "input": text[:1000], "source_language_code": "en-IN",
            "target_language_code": lang, "model": "mayura:v1"})
    if r.status_code != 200:
        raise HTTPException(502, "Translation failed: " + r.text[:200])
    return r.json()["translated_text"]


async def translate_list(items, lang):
    """Translate a list in one call; if line count changes, return None so English is kept."""
    if lang == "en-IN" or not items:
        return items
    parts = [x.strip() for x in (await translate("\n".join(items), lang)).split("\n") if x.strip()]
    return parts if len(parts) == len(items) else None


class Profile(BaseModel):
    state: str
    crop: str
    needs: list[str] = []
    language: str = "en-IN"



def has(values, item):
    low = [str(v).strip().lower() for v in values]
    return "any" in low or str(item).strip().lower() in low

def normalize_need(value):
    return " ".join(str(value).lower().replace("&", "and").replace("-", " ").replace("/", " ").split())

NEED_ALIASES = {
    "Irrigation & water": ["irrigation", "water", "drip", "sprinkler", "watering"],
    "Financial assistance": ["financial", "money", "loan", "credit", "income support"],
    "Crop insurance": ["insurance", "bima"],
    "Soil health": ["soil", "soil testing"],
    "Seeds & fertilisers": ["seed", "fertiliser", "fertilizer", "manure"],
    "Market access & selling": ["market", "mandi", "selling", "sell crops"],
    "Other farming needs": ["beekeeping", "honey", "food processing"],
    "General government schemes": ["general government schemes"]
}

def need_matches(user_need, scheme_needs):
    user_text = normalize_need(user_need)
    for scheme_need in scheme_needs:
        scheme_text = normalize_need(scheme_need)
        if user_text == scheme_text or user_text in scheme_text or scheme_text in user_text:
            return True
        for category, aliases in NEED_ALIASES.items():
            if normalize_need(category) == scheme_text and any(alias in user_text for alias in aliases):
                return True
    return False

def normalize_need(value):
    return " ".join(
        str(value).lower()
        .replace("&", "and")
        .replace("-", " ")
        .replace("/", " ")
        .split()
    )


NEED_ALIASES = {
    "Irrigation & water": [
        "irrigation", "water", "water supply", "drip",
        "sprinkler", "watering"
    ],
    "Financial assistance": [
        "financial", "money", "financial help", "financial assistance",
        "cash support", "income support", "loan", "credit"
    ],
    "Crop insurance": [
        "insurance", "crop insurance", "bima", "crop protection"
    ],
    "Soil health": [
        "soil", "soil testing", "soil health"
    ],
    "Seeds & fertilisers": [
        "seeds", "seed", "fertiliser", "fertilizer",
        "fertilisers", "fertilizers", "manure"
    ],
    "Market access & selling": [
        "market", "mandi", "selling", "sell crops",
        "market access", "market prices"
    ],
    "Other farming needs": [
        "beekeeping", "honey", "food processing",
        "other farming needs"
    ],
    "General government schemes": [
        "general government schemes"
    ]
}


def need_matches(user_need, scheme_needs):
    user_text = normalize_need(user_need)

    for scheme_need in scheme_needs:
        scheme_text = normalize_need(scheme_need)

        if user_text == scheme_text:
            return True

        if user_text in scheme_text or scheme_text in user_text:
            return True

        for category, aliases in NEED_ALIASES.items():
            if normalize_need(category) == scheme_text:
                if any(alias in user_text for alias in aliases):
                    return True

    return False


@app.post("/api/match")
async def match(p: Profile):
    """Fixed rules decide matches. Sarvam only translates the text."""
    results = []

    for s in SCHEMES:
        state_ok = has(s["states"], p.state)
        crop_ok = has(s["crops"], p.crop)

        need_ok = any(
            need_matches(user_need, s["needs"])
            for user_need in p.needs
        )

        if not state_ok or (p.needs and not need_ok):
            continue

        if p.needs and need_ok and crop_ok:
            level = "Potential match"
        elif p.needs and need_ok:
            level = "Possible match"
        else:
            level = "Check eligibility"

        why = [f"Your state ({p.state}) is covered."]

        if crop_ok:
            why.append(f"Your crop ({p.crop}) is covered.")

        if p.needs and need_ok:
            why.append("It supports what you asked for.")

        results.append({
            **s,
            "level": level,
            "why": why
        })

    for r in results:
        for field in ("why", "documents", "next_steps"):
            r[field + "_t"] = await translate_list(
                r[field], p.language
            )

    labels = await translate_list(LABELS, p.language)

    return {
        "results": results,
        "labels": labels or LABELS
    }



class Speak(BaseModel):
    text: str
    language: str = "en-IN"


@app.post("/api/speak")
async def speak(b: Speak):
    need_key()
    async with httpx.AsyncClient(timeout=60) as c:
        r = await c.post(f"{BASE}/text-to-speech", headers=HEAD, json={
            "text": b.text[:2000], "target_language_code": b.language,
            "model": "bulbul:v3", "speaker": "shubh"})
    if r.status_code != 200:
        raise HTTPException(502, "Text-to-speech failed: " + r.text[:200])
    return {"audio": "".join(r.json()["audios"])}  # base64 WAV


@app.post("/api/transcribe")
async def transcribe(audio: UploadFile = File(...), language: str = Form("unknown")):
    need_key()
    data = await audio.read()
    ctype = (audio.content_type or "audio/webm").split(";")[0]
    files = {"file": (audio.filename or "speech.webm", data, ctype)}
    async with httpx.AsyncClient(timeout=60) as c:
        r = await c.post(f"{BASE}/speech-to-text", headers=HEAD, files=files,
                         data={"model": "saaras:v3", "language_code": language})
    if r.status_code != 200:
        raise HTTPException(502, "Speech-to-text failed: " + r.text[:200])
    return {"transcript": r.json().get("transcript", "")}


# Serves the website too, so one command runs everything. Keep this LAST.
app.mount("/", StaticFiles(directory=ROOT.parent / "frontend", html=True), name="site")
