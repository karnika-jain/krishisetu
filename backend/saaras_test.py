import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SARVAM_API_KEY")

url = "https://api.sarvam.ai/speech-to-text"
headers = {
"api-subscription-key": api_key
}

file_path = os.path.expanduser("~/Downloads/New Recording.m4a")

with open(file_path, "rb") as audio_file:
files = {
"file": audio_file
}
data = {
"model": "saaras:v4",
"language_code": "unknown"
}
response = requests.post(url, headers=headers, files=files, data=data)

print(response.status_code)
print(response.text)import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SARVAM_API_KEY")

url = "https://api.sarvam.ai/speech-to-text"
headers = {
    "api-subscription-key": api_key
}

file_path = os.path.expanduser("~/Downloads/New Recording.m4a")

with open(file_path, "rb") as audio_file:
    files = {
        "file": audio_file
    }
    data = {
        "model": "saaras:v4",
        "language_code": "unknown"
    }
    response = requests.post(url, headers=headers, files=files, data=data)

print(response.status_code)
print(response.text)
