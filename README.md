# KrishiSetu

**Bridging Farmers to the Right Support.**

KrishiSetu helps farmers find government schemes that may fit their state, crop and needs. It asks a few simple questions, shows possible matches with reasons, documents to prepare and next steps, and links to the official source.

> KrishiSetu is a hackathon prototype. It is not an official government platform and does not decide eligibility. Results are potential matches only. Always confirm with the relevant authority.

## What is built so far

- Homepage with a "How it works" section
- A six-step guided flow (`find.html`): speak or type, language, support needed, farm details, optional photos, review
- Results cards with why it matched, documents, next steps and official links (needs the backend to run)
- Scheme data for 10 schemes in `backend/schemes.json`

## Still in progress

- Verifying all scheme details against official government sources (every record is currently marked `verified: false`)
- Testing the backend and connecting it to the frontend
- Voice input and spoken results using Sarvam AI

## Project structure

- `frontend/` - HTML, CSS and JavaScript
- `backend/` - Python (FastAPI) and scheme data

## Safety notes

- No API keys are stored in the frontend or in GitHub.
- The app never asks for Aadhaar, bank account numbers or passwords.
- Photos stay on the farmer's device.

## Team

- Karnika Jain: frontend and backend
- Avani Jain: backend