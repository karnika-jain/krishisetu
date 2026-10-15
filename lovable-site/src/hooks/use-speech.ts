import { useCallback, useEffect, useRef, useState } from "react";

// Browser Web Speech API only. A future backend speech service (e.g. Sarvam AI)
// should be called from a server function so keys never reach the browser.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Rec = any;

export function useSpeech(lang: string) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recRef = useRef<Rec>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    setSupported(!!(w.SpeechRecognition || w.webkitSpeechRecognition));
  }, []);

  const stop = useCallback(() => {
    recRef.current?.stop();
    setListening(false);
  }, []);

  const start = useCallback(
    (onText: (text: string) => void) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
      if (!SR) { setError("Voice input is not available in this browser. Please type instead."); return; }
      setError(null);
      const rec = new SR();
      rec.lang = lang;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e: Rec) => {
        const text = Array.from(e.results).map((r: Rec) => r[0].transcript).join(" ").trim();
        if (text) onText(text);
        else setError("We could not hear any words. Please try again or type.");
      };
      rec.onerror = (e: Rec) => {
        setError(
          e.error === "not-allowed"
            ? "Microphone permission was denied. Please type instead."
            : e.error === "no-speech"
              ? "No speech was detected. Please try again or type."
              : `Voice input stopped (${e.error}). Please type instead.`,
        );
        setListening(false);
      };
      rec.onend = () => setListening(false);
      recRef.current = rec;
      try { rec.start(); setListening(true); } catch { setError("Could not start the microphone."); }
    },
    [lang],
  );

  useEffect(() => () => recRef.current?.abort?.(), []);
  return { supported, listening, error, start, stop };
}
