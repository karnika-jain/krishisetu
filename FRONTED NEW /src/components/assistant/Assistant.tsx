import { useEffect, useRef, useState } from "react";
import { Loader2, Mic, Send, Sprout } from "lucide-react";
import { useSiteLang, type SiteLang } from "@/lib/site-i18n";

type Msg = { role: "user" | "assistant"; content: string };

const UI: Record<SiteLang, { placeholder: string; examples: string[]; intro: string; thinking: string; mic: string; send: string }> = {
  en: {
    placeholder: "Ask about a scheme…",
    intro: "Ask me about government schemes for farmers — eligibility, documents or how to apply. I can make mistakes, so always check the official portal.",
    examples: ["What documents do I need for crop insurance?", "Who can apply for PM-KISAN?", "How do I apply for a Kisan Credit Card?"],
    thinking: "Thinking…", mic: "Voice input coming soon", send: "Send",
  },
  hi: {
    placeholder: "किसी योजना के बारे में पूछें…",
    intro: "किसानों के लिए सरकारी योजनाओं के बारे में पूछें — पात्रता, दस्तावेज़ या आवेदन कैसे करें। मुझसे गलती हो सकती है, इसलिए आधिकारिक पोर्टल ज़रूर जांचें।",
    examples: ["फसल बीमा के लिए कौन से दस्तावेज़ चाहिए?", "PM-KISAN के लिए कौन आवेदन कर सकता है?", "किसान क्रेडिट कार्ड के लिए आवेदन कैसे करें?"],
    thinking: "सोच रहे हैं…", mic: "आवाज़ सुविधा जल्द आएगी", send: "भेजें",
  },
  kn: {
    placeholder: "ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ…",
    intro: "ರೈತರ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ — ಅರ್ಹತೆ, ದಾಖಲೆಗಳು ಅಥವಾ ಅರ್ಜಿ ಹೇಗೆ. ನನ್ನಿಂದ ತಪ್ಪಾಗಬಹುದು, ಆದ್ದರಿಂದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಪರಿಶೀಲಿಸಿ.",
    examples: ["ಬೆಳೆ ವಿಮೆಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?", "PM-KISAN ಗೆ ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?", "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗೆ ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸುವುದು?"],
    thinking: "ಯೋಚಿಸುತ್ತಿದೆ…", mic: "ಧ್ವನಿ ಸೌಲಭ್ಯ ಶೀಘ್ರದಲ್ಲೇ", send: "ಕಳುಹಿಸಿ",
  },
};

export function Assistant() {
  const { lang } = useSiteLang();
  const ui = UI[lang];
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, loading]);
  useEffect(() => { inputRef.current?.focus(); }, []);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setError(null);
    const history: Msg[] = [...messages, { role: "user", content: q }];
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
        throw new Error((j as { error?: string }).error ?? "Something went wrong. Please try again.");
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      setMessages([...history, { role: "assistant", content: "" }]);
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: acc }]);
      }
      if (!acc.trim()) {
        setMessages(history);
        throw new Error("No answer was returned. Please try again.");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  const waiting = loading && messages[messages.length - 1]?.role === "user";

  return (
    <div className="flex h-[min(720px,calc(100vh-10rem))] flex-col overflow-hidden rounded-3xl border bg-card">
      <div className="flex-1 space-y-4 overflow-y-auto p-5 md:p-6" aria-live="polite">
        <div className="flex gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Sprout className="h-4 w-4" /></span>
          <p className="max-w-[85%] text-[15px] leading-relaxed">{ui.intro}</p>
        </div>
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 pl-12">
            {ui.examples.map((q) => (
              <button key={q} type="button" onClick={() => send(q)} className="min-h-11 rounded-xl border bg-background px-4 py-2 text-left text-sm font-medium hover:border-primary">{q}</button>
            ))}
          </div>
        )}
        {messages.map((m, i) =>
          m.role === "user" ? (
            <p key={i} className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-[15px] text-primary-foreground">{m.content}</p>
          ) : (
            <div key={i} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground"><Sprout className="h-4 w-4" /></span>
              <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-[15px] leading-relaxed">{renderBold(m.content)}</p>
            </div>
          ),
        )}
        {waiting && (
          <p className="flex items-center gap-2 pl-12 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" />{ui.thinking}</p>
        )}
        {error && <p role="alert" className="rounded-xl bg-destructive/10 p-3 text-sm font-medium text-destructive">{error}</p>}
        <div ref={endRef} />
      </div>
      <form className="flex items-end gap-2 border-t p-3" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <button type="button" disabled title={ui.mic} aria-label={ui.mic} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border text-muted-foreground opacity-60"><Mic className="h-5 w-5" /></button>
        <label htmlFor="assistant-input" className="sr-only">{ui.placeholder}</label>
        <textarea
          id="assistant-input" ref={inputRef} rows={1} value={input} placeholder={ui.placeholder} maxLength={2000}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
          className="field max-h-32 min-h-11 resize-none py-2.5"
        />
        <button type="submit" disabled={loading || !input.trim()} aria-label={ui.send} className="btn-primary h-11 w-11 shrink-0 p-0">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        </button>
      </form>
    </div>
  );
}

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}
