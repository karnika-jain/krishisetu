// UI strings for the support finder. English and Hindi are translated;
// other languages fall back to English (shown honestly in the UI).
export const LANGUAGES = [
  { code: "hi", label: "हिन्दी", english: "Hindi", speech: "hi-IN" },
  { code: "en", label: "English", english: "English", speech: "en-IN" },
  { code: "kn", label: "ಕನ್ನಡ", english: "Kannada", speech: "kn-IN" },
  { code: "te", label: "తెలుగు", english: "Telugu", speech: "te-IN" },
  { code: "ta", label: "தமிழ்", english: "Tamil", speech: "ta-IN" },
  { code: "ml", label: "മലയാളം", english: "Malayalam", speech: "ml-IN" },
  { code: "mr", label: "मराठी", english: "Marathi", speech: "mr-IN" },
  { code: "bn", label: "বাংলা", english: "Bengali", speech: "bn-IN" },
  { code: "gu", label: "ગુજરાતી", english: "Gujarati", speech: "gu-IN" },
  { code: "pa", label: "ਪੰਜਾਬੀ", english: "Punjabi", speech: "pa-IN" },
  { code: "or", label: "ଓଡ଼ିଆ", english: "Odia", speech: "or-IN" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];
export const TRANSLATED: LangCode[] = ["en", "hi"];

const en = {
  stepMode: "How would you like to answer?",
  speak: "Speak", speakHint: "Use your voice",
  type: "Type", typeHint: "Use the keyboard",
  stepLang: "Choose your language",
  stepNeed: "What support are you looking for?",
  describe: "Or describe your problem in your own words",
  stepDetails: "Tell us about your farm",
  name: "Your name (optional)", state: "State", district: "District (optional)",
  crop: "Main crop", land: "Land size in acres (optional)", method: "Farming method (optional)",
  problem: "Main problem or support needed",
  stepPhotos: "Add photos (optional)",
  photosHint: "Up to 4 photos. They stay on your device and are never uploaded.",
  stepReview: "Check your answers",
  back: "Back", next: "Continue", find: "Find my support",
  listen: "Tap to speak", listening: "Listening… tap to stop",
  required: "Please fill this in.",
};
const hi: Partial<typeof en> = {
  stepMode: "आप कैसे जवाब देना चाहेंगे?",
  speak: "बोलें", speakHint: "अपनी आवाज़ से",
  type: "लिखें", typeHint: "कीबोर्ड से",
  stepLang: "अपनी भाषा चुनें",
  stepNeed: "आपको किस तरह की सहायता चाहिए?",
  describe: "या अपनी समस्या अपने शब्दों में बताएं",
  stepDetails: "अपनी खेती के बारे में बताएं",
  name: "आपका नाम (वैकल्पिक)", state: "राज्य", district: "ज़िला (वैकल्पिक)",
  crop: "मुख्य फसल", land: "ज़मीन (एकड़ में, वैकल्पिक)", method: "खेती का तरीका (वैकल्पिक)",
  problem: "मुख्य समस्या या ज़रूरी सहायता",
  stepPhotos: "फ़ोटो जोड़ें (वैकल्पिक)",
  photosHint: "अधिकतम 4 फ़ोटो। ये आपके डिवाइस पर ही रहती हैं, अपलोड नहीं होतीं।",
  stepReview: "अपने जवाब जांचें",
  back: "पीछे", next: "आगे बढ़ें", find: "मेरी सहायता खोजें",
  listen: "बोलने के लिए दबाएं", listening: "सुन रहे हैं… रोकने के लिए दबाएं",
  required: "कृपया यह भरें।",
};
export type StringKey = keyof typeof en;
export const t = (lang: LangCode, key: StringKey) =>
  (lang === "hi" ? hi[key] : undefined) ?? en[key];
