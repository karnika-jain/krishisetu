import requests
from dotenv import load_dotenv
import os

load_dotenv()
import requests
import base64
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SARVAM_API_KEY")

url = "https://api.sarvam.ai/text-to-speech"
headers = {
    "api-subscription-key": api_key,
    "Content-Type": "application/json"
}
payload = {
    "inputs": ["KrishiSetu is working."],
    "target_language_code": "hi-IN",
    "speaker": "aparna_hi_customer",
    "model": "bulbul:v4-flash"
}

response = requests.post(url, json=payload, headers=headers)
print(response.status_code)

if response.status_code == 200:
    audio_base64 = response.json()["audios"][0]
    with open("output.wav", "wb") as f:
        f.write(base64.b64decode(audio_base64))
    print("Saved output.wav")
else:
    print(response.text)


