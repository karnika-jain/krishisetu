import { useEffect, useRef, useState } from "react";
import { Loader2, Mic, Send, Sprout, Square } from "lucide-react";
import { useSiteLang, type SiteLang } from "@/lib/site-i18n";

type Msg = { role: "user" | "assistant"; content: string };

const BACKEND_URL = "http://127.0.0.1:8000";

const SARVAM_LANGUAGE: Record<SiteLang, string> = {
  en: "en-IN",
  hi: "hi-IN",
  kn: "kn-IN",
};

const UI: Record<SiteLang, {
  placeholder: string;
  examples: string[];
  intro: string;
  thinking: string;
  mic: string;
  stop: string;
  send: string;
  recording: string;
  processing: string;
}> = {
  en: {
    placeholder: "Ask about a scheme…",
    intro: "Ask me about government schemes for farmers — eligibility, documents or how to apply. I can make mistakes, so always check the official portal.",
    examples: ["What documents do I need for crop insurance?", "Who can apply for PM-KISAN?", "How do I apply for a Kisan Credit Card?"],
    thinking: "Thinking…",
    mic: "Start voice input",
    stop: "Stop recording",
    send: "Send",
    recording: "Recording… Tap the button to finish.",
    processing: "Converting your speech…",
  },
  hi: {
    placeholder: "किसी योजना के बारे में पूछें…",
    intro: "किसानों के लिए सरकारी योजनाओं के बारे में पूछें — पात्रता, दस्तावेज़ या आवेदन कैसे करें। मुझसे गलती हो सकती है, इसलिए आधिकारिक पोर्टल ज़रूर जांचें।",
    examples: ["फसल बीमा के लिए कौन से दस्तावेज़ चाहिए?", "PM-KISAN के लिए कौन आवेदन कर सकता है?", "किसान क्रेडिट कार्ड के लिए आवेदन कैसे करें?"],
    thinking: "सोच रहे हैं…",
    mic: "आवाज़ से पूछें",
    stop: "रिकॉर्डिंग रोकें",
    send: "भेजें",
    recording: "रिकॉर्डिंग हो रही है… समाप्त करने के लिए बटन दबाएं।",
    processing: "आपकी आवाज़ को टेक्स्ट में बदल रहे हैं…",
  },
  kn: {
    placeholder: "ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ…",
    intro: "ರೈತರ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ — ಅರ್ಹತೆ, ದಾಖಲೆಗಳು ಅಥವಾ ಅರ್ಜಿ ಹೇಗೆ. ನನ್ನಿಂದ ತಪ್ಪಾಗಬಹುದು, ಆದ್ದರಿಂದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಪರಿಶೀಲಿಸಿ.",
    examples: ["ಬೆಳೆ ವಿಮೆಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?", "PM-KISAN ಗೆ ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?", "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗೆ ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸುವುದು?"],
    thinking: "ಯೋಚಿಸುತ್ತಿದೆ…",
    mic: "ಧ್ವನಿಯ ಮೂಲಕ ಕೇಳಿ",
    stop: "ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ",
    send: "ಕಳುಹಿಸಿ",
    recording: "ರೆಕಾರ್ಡಿಂಗ್ ನಡೆಯುತ್ತಿದೆ… ಮುಗಿಸಲು ಬಟನ್ ಒತ್ತಿ.",
    processing: "ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಪಠ್ಯಕ್ಕೆ ಪರಿವರ್ತಿಸಲಾಗುತ್ತಿದೆ…",
  },
};

export function Assistant() {
  const { lang } = useSiteLang();
  const ui = UI[lang];

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [processingVoice, setProcessingVoice] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, processingVoice]);

  useEffect(() => {
    inputRef.current?.focus();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  async function speak(text: string) {
    const response = await fetch(`${BACKEND_URL}/api/speak`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text.slice(0, 2000),
        language: SARVAM_LANGUAGE[lang],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not generate voice response.");
    }

    const data = (await response.json()) as { audio?: string };

    if (!data.audio) {
      throw new Error("No audio was returned.");
    }

    const audio = new Audio(`data:audio/wav;base64,${data.audio}`);
    await audio.play();
  }

  async function send(text: string, autoSpeak = false) {
    const q = text.trim();

    if (!q || loading) return;

    setError(null);

    const history: Msg[] = [
      ...messages,
      { role: "user", content: q },
    ];

    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error(
          (j as { error?: string }).error ??
            "Something went wrong. Please try again.",
        );
      }

      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";

      setMessages([
        ...history,
        { role: "assistant", content: "" },
      ]);

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;

        acc += dec.decode(value, { stream: true });

        setMessages([
          ...history,
          { role: "assistant", content: acc },
        ]);
      }

      acc += dec.decode();

      if (!acc.trim()) {
        setMessages(history);
        throw new Error("No answer was returned. Please try again.");
      }

      if (autoSpeak) {
        try {
          await speak(acc);
        } catch {
          setError("Your answer is ready, but its audio could not be played.");
        }
      }

      return acc;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      return null;
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  async function processRecording(blob: Blob) {
    setProcessingVoice(true);
    setError(null);

    try {
      const extension = blob.type.includes("mp4") ? "mp4" : "webm";
      const formData = new FormData();

      formData.append("audio", blob, `speech.${extension}`);
      formData.append("language", SARVAM_LANGUAGE[lang]);

      const response = await fetch(`${BACKEND_URL}/api/transcribe`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Speech recognition failed. Please try again.");
      }

      const data = (await response.json()) as { transcript?: string };
      const transcript = data.transcript?.trim();

      if (!transcript) {
        throw new Error("I couldn't understand that. Please try again.");
      }

      await send(transcript, true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Voice input failed.");
    } finally {
      setProcessingVoice(false);
    }
  }

  async function toggleRecording() {
    if (recording) {
      recorderRef.current?.stop();
      setRecording(false);
      return;
    }

    if (loading || processingVoice) return;

    setError(null);

    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
        throw new Error("Voice recording is not supported in this browser.");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      let options: MediaRecorderOptions = {};

      if (MediaRecorder.isTypeSupported("audio/webm")) {
        options = { mimeType: "audio/webm" };
      } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
        options = { mimeType: "audio/mp4" };
      }

      const recorder = new MediaRecorder(stream, options);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, {
          type: recorder.mimeType || "audio/webm",
        });

        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        recorderRef.current = null;

        if (blob.size > 0) {
          void processRecording(blob);
        } else {
          setError("No audio was recorded. Please try again.");
        }
      };

      recorderRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch (e) {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;

      setError(
        e instanceof Error
          ? e.message
          : "Could not access your microphone.",
      );
    }
  }

  const waiting =
    loading && messages[messages.length - 1]?.role === "user";

  return (
    <div className="flex h-[min(720px,calc(100vh-10rem))] flex-col overflow-hidden rounded-3xl border bg-card">
      <div className="flex-1 space-y-4 overflow-y-auto p-5 md:p-6" aria-live="polite">
        <div className="flex gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Sprout className="h-4 w-4" />
          </span>
          <p className="max-w-[85%] text-[15px] leading-relaxed">
            {ui.intro}
          </p>
        </div>

        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 pl-12">
            {ui.examples.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => void send(q)}
                disabled={loading || processingVoice}
                className="min-h-11 rounded-xl border bg-background px-4 py-2 text-left text-sm font-medium hover:border-primary"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <p
              key={i}
              className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-[15px] text-primary-foreground"
            >
              {m.content}
            </p>
          ) : (
            <div key={i} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <Sprout className="h-4 w-4" />
              </span>
              <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-[15px] leading-relaxed">
                {renderBold(m.content)}
              </p>
            </div>
          ),
        )}

        {waiting && (
          <p className="flex items-center gap-2 pl-12 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            {ui.thinking}
          </p>
        )}

        {recording && (
          <p className="pl-12 text-sm font-medium text-primary">
            {ui.recording}
          </p>
        )}

        {processingVoice && (
          <p className="flex items-center gap-2 pl-12 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            {ui.processing}
          </p>
        )}

        {error && (
          <p role="alert" className="rounded-xl bg-destructive/10 p-3 text-sm font-medium text-destructive">
            {error}
          </p>
        )}

        <div ref={endRef} />
      </div>

      <form
        className="flex items-end gap-2 border-t p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
      >
        <button
          type="button"
          onClick={() => void toggleRecording()}
          disabled={loading || processingVoice}
          title={recording ? ui.stop : ui.mic}
          aria-label={recording ? ui.stop : ui.mic}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${
            recording
              ? "border-destructive bg-destructive text-white"
              : "text-muted-foreground hover:border-primary"
          } disabled:opacity-50`}
        >
          {recording ? (
            <Square className="h-5 w-5" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </button>

        <label htmlFor="assistant-input" className="sr-only">
          {ui.placeholder}
        </label>

        <textarea
          id="assistant-input"
          ref={inputRef}
          rows={1}
          value={input}
          placeholder={ui.placeholder}
          maxLength={2000}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send(input);
            }
          }}
          className="field max-h-32 min-h-11 resize-none py-2.5"
        />

        <button
          type="submit"
          disabled={loading || processingVoice || !input.trim()}
          aria-label={ui.send}
          className="btn-primary h-11 w-11 shrink-0 p-0"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </form>
    </div>
  );
}

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part,
  );
}