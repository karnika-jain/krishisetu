import os
from pydub import AudioSegment

home = os.path.expanduser("~")
sound = AudioSegment.from_file(home + "/Downloads/New Recording.m4a")
sound.export(home + "/Downloads/new_recording.wav", format="wav")
print("Done converting")
