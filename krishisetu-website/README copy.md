# KrishiSetu — Bridging Farmers to the Right Support

A hackathon prototype that helps Indian farmers discover **potentially relevant** government schemes and farming support based on their state, crop and needs. Not an official government platform.

## Problem
Scheme information is scattered, hard to understand and often not in the farmer's language.

## Features
- **Home** (`/`) — explanation, "Find My Support" and "Talk to KrishiSetu" (opens the finder in voice mode).
- **Support finder** (`/find`) — 6 steps: speak/type → language (11 Indian languages in native script) → support category or free text → farm details (validated) → optional photos (max 4, stay on device) → review.
- **Results** (`/results`) — summary, rule-based matches with explanations, next steps, official links, edit button, disclaimer.
- **Demo** (`/demo`) — fictional profile "Ramesh, Dharwad, Karnataka, tomato, irrigation" with 3 sample records.
- **Scheme directory** (`/schemes`, `/schemes/:id`) — search, category and record-type filters, detail pages.
- **Resources** (`/resources`) — official portal links + general (non-official) guidance.

## What is real vs simulated
| Functional | Simulated / planned |
|---|---|
| Guided form, validation, back/edit without data loss | Photo analysis ("coming later") |
| Browser speech recognition (Chrome/Edge) with typing fallback | "Listen to answer" read-aloud (coming soon) |
| Deterministic matching with explanations | Full translation — only English & Hindi UI strings exist; others fall back to English (voice still listens in the chosen language) |
| Search & filters | AI / Sarvam AI integration (not connected) |

Answers are kept only in `sessionStorage` for the current browser tab. Nothing is sent to a server.

## Matching logic (`src/lib/matching.ts`)
For each record in `src/data/schemes.json`:
1. **State** — if the record lists states and yours isn't one, it's excluded; `"ALL"` means listed nationally.
2. **Crop** — if crops are listed (crop names or `group:vegetables` etc.), yours must match.
3. **Category** — matches your selected need.
Status: category + a specific state/crop match → *Potential match*; category only or state+crop → *Possible match*; otherwise *Check eligibility*. Missing data is never treated as eligibility. Every reason shown comes from these rules.

## Run
```bash
bun install
bun run dev
```

## Adding verified scheme records
Add an object to `src/data/schemes.json` with `isSample: false`, `verification: "verified"`, a real `sourceUrl`, and only fields you have verified (leave others `null` — the UI shows "Not verified"). No code changes needed.

## Future voice / AI integration
Add a TanStack `createServerFn` that calls the speech/translation provider (e.g. Sarvam AI) with a key stored as a server secret. The browser calls only that function — never the provider directly. Keep AI output separate from `matching.ts`; AI should help understand input, not invent schemes.

## AI Assistant (`/assistant`)
Working chat built on KrishiSetu AI (server route `src/routes/api/assistant.ts`; the key stays on the server). It answers in English, Hindi or Kannada, uses the official records in `schemes.json`, says when it can't confirm something, and ends every answer with a reminder to check the official portal. The microphone icon is a placeholder only.
