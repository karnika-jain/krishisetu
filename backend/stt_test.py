import sys
import os
import requests
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SARVAM_API_KEY")

if len(sys.argv) < 2:
    print("Usage: python3 stt_test.py <audio file name in Downloads>")
    sys.exit()

name = sys.argv[1]
path = os.path.expanduser("~/Downloads/" + name)

with open(path, "rb") as f:
    files = {"file": (name, f, "audio/mp4")}
    data = {"model": "saaras:v4", "language_code": "unknown"}
    r = requests.post(
        "https://api.sarvam.ai/speech-to-text",
        headers={"api-subscription-key": api_key},
        files=files,
        data=data,
    )

print(r.status_code)
if r.status_code == 200:
    out = r.json()
    print("Language:", out["language_code"])
    print("Text:", out["transcript"])
else:
    print(r.text)
