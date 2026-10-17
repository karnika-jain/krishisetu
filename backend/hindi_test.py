import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SARVAM_API_KEY")

url = "https://api.sarvam.ai/speech-to-text"
headers = {
    "api-subscription-key": api_key
}

home = os.path.expanduser("~")
file_path = home + "/Downloads/New Recording 2.m4a"

with open(file_path, "rb") as audio_file:
    files = {
        "file": ("New Recording 2.m4a", audio_file, "audio/mp4")
    }
    data = {
        "model": "saaras:v4",
        "language_code": "unknown"
    }
    response = requests.post(url, headers=headers, files=files, data=data)

print(response.status_code)
if response.status_code == 200:
    result = response.json()
    print("Language:", result["language_code"])
    print("Text:", result["transcript"])
else:
    print(response.text)
