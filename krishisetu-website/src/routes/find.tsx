import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useFinder } from "@/lib/finder-context";
import { LANGUAGES, TRANSLATED, t } from "@/lib/i18n";
import { CATEGORIES, CROPS, FARMING_METHODS, STATES, categoryLabel } from "@/lib/schemes";
import { useSpeech } from "@/hooks/use-speech";

export const Route = createFileRoute("/find")({
  validateSearch: (s: Record<string, unknown>): { mode?: "speak" | "type" } =>
    s["mode"] === "speak" || s["mode"] === "type" ? { mode: s["mode"] } : {},
  head: () => ({
    meta: [
      { title: "Find My Support — KrishiSetu" },
      { name: "description", content: "Answer a few simple questions by voice or text to see potentially relevant farm support." },
      { property: "og:title", content: "Find My Support — KrishiSetu" },
      { property: "og:description", content: "A guided, step-by-step support finder for farmers." },
    ],
  }),
  component: Finder,
});

const STEPS = 6;
type Errs = Partial<Record<"mode" | "need" | "state" | "crop" | "land" | "photos", string>>;

function Finder() {
  const { mode: modeParam } = Route.useSearch();
  const { state, update, updateProfile, photos, setPhotos } = useFinder();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Errs>({});
  const L = state.lang;
  const speechLang = LANGUAGES.find((l) => l.code === L)?.speech ?? "en-IN";
  const speech = useSpeech(speechLang);
  const p = state.profile;
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (modeParam) { update({ mode: modeParam }); setStep(2); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modeParam]);

  const useVoice = state.mode === "speak" && speech.supported;

  const go = (n: number) => { setErrors({}); setStep(n); window.scrollTo({ top: 0 }); };

  const next = () => {
    const e: Errs = {};
    if (step === 1 && !state.mode) e.mode = "Please choose Speak or Type.";
    if (step === 3 && !p.category && !p.problem?.trim()) e.need = "Please choose a category or describe your problem.";
    if (step === 4) {
      if (!p.state) e.state = t(L, "required");
      if (!p.crop?.trim()) e.crop = t(L, "required");
      if (p.landAcres && (isNaN(Number(p.landAcres)) || Number(p.landAcres) < 0)) e.land = "Enter a number, e.g. 3 or 2.5";
    }
    setErrors(e);
    if (Object.keys(e).length === 0) go(step + 1);
  };

  const submit = () => {
    update({ submitted: true });
    navigate({ to: "/results" });
  };

  const addPhotos = (files: FileList | null) => {
    if (!files) return;
    const room = 4 - photos.length;
    const list = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, room);
    setPhotos([...photos, ...list.map((f) => ({ url: URL.createObjectURL(f), name: f.name }))]);
    if (Array.from(files).length > room) setErrors({ photos: "You can select up to 4 photos." });
  };

  const Mic = ({ onText }: { onText: (s: string) => void }) =>
    useVoice ? (
      <button type="button" className={`btn-accent px-4 py-2 text-sm ${speech.listening ? "animate-pulse" : ""}`}
        onClick={() => (speech.listening ? speech.stop() : speech.start(onText))}>
        🎙 {speech.listening ? t(L, "listening") : t(L, "listen")}
      </button>
    ) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2" aria-label={`Step ${step} of ${STEPS}`}>
        {Array.from({ length: STEPS }).map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
      <p className="text-sm font-semibold text-muted-foreground">Step {step} of {STEPS}</p>

      {state.mode === "speak" && !speech.supported && step > 1 && (
        <div className="mt-4 rounded-xl bg-warning p-4 text-sm text-warning-foreground">
          Voice input is not available in this browser, so we have switched to typing. Try Chrome or Edge for voice.
        </div>
      )}
      {speech.error && <div className="mt-4 rounded-xl bg-warning p-4 text-sm text-warning-foreground">{speech.error}</div>}

      <div className="card mt-4 md:p-8">
        {step === 1 && (
          <>
            <h1 className="text-3xl">{t(L, "stepMode")}</h1>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {(["speak", "type"] as const).map((m) => (
                <button key={m} type="button" onClick={() => update({ mode: m })} className={`option flex-col py-8 ${state.mode === m ? "option-active" : ""}`}>
                  <span className="text-4xl">{m === "speak" ? "🎙" : "⌨️"}</span>
                  <span className="font-display text-2xl">{t(L, m)}</span>
                  <span className="text-sm text-muted-foreground">{t(L, m === "speak" ? "speakHint" : "typeHint")}</span>
                </button>
              ))}
            </div>
            {state.mode === "speak" && !speech.supported && (
              <p className="mt-4 text-sm text-destructive">Voice input is not supported in this browser. You can continue by typing.</p>
            )}
            <Err msg={errors.mode} />
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-3xl">{t(L, "stepLang")}</h1>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {LANGUAGES.map((l) => (
                <button key={l.code} type="button" lang={l.code} onClick={() => update({ lang: l.code })} className={`option flex-col ${L === l.code ? "option-active" : ""}`}>
                  <span className="text-xl font-bold">{l.label}</span>
                  <span className="text-xs text-muted-foreground">{l.english}</span>
                </button>
              ))}
            </div>
            {!TRANSLATED.includes(L) && (
              <p className="mt-4 rounded-xl bg-muted p-3 text-sm text-muted-foreground">
                Voice input will listen in {LANGUAGES.find((l) => l.code === L)?.english}. On-screen text is shown in English for now — full translation is coming later.
              </p>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-3xl">{t(L, "stepNeed")}</h1>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <button key={c.id} type="button" onClick={() => updateProfile({ category: p.category === c.id ? "" : c.id })} className={`option ${p.category === c.id ? "option-active" : ""}`}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted text-lg">{c.icon}</span>
                  <span className="font-semibold">{c.label}</span>
                </button>
              ))}
            </div>
            <label className="label mt-6" htmlFor="problem">{t(L, "describe")}</label>
            <textarea id="problem" rows={3} className="field" value={p.problem} onChange={(e) => updateProfile({ problem: e.target.value })} />
            <div className="mt-2"><Mic onText={(s) => updateProfile({ problem: [p.problem, s].filter(Boolean).join(" ") })} /></div>
            <Err msg={errors.need} />
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="text-3xl">{t(L, "stepDetails")}</h1>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label={t(L, "name")}>
                <input className="field" value={p.name} onChange={(e) => updateProfile({ name: e.target.value })} />
                <Mic onText={(s) => updateProfile({ name: s })} />
              </Field>
              <Field label={`${t(L, "state")} *`} error={errors.state}>
                <select className="field" value={p.state} onChange={(e) => updateProfile({ state: e.target.value })}>
                  <option value="">Select state…</option>
                  {STATES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label={t(L, "district")}>
                <input className="field" value={p.district} onChange={(e) => updateProfile({ district: e.target.value })} />
                <Mic onText={(s) => updateProfile({ district: s })} />
              </Field>
              <Field label={`${t(L, "crop")} *`} error={errors.crop}>
                <input className="field" list="crops" value={p.crop} placeholder="e.g. Tomato" onChange={(e) => updateProfile({ crop: e.target.value })} />
                <datalist id="crops">{CROPS.map((c) => <option key={c} value={c} />)}</datalist>
                <Mic onText={(s) => updateProfile({ crop: s })} />
              </Field>
              <Field label={t(L, "land")} error={errors.land}>
                <input className="field" inputMode="decimal" value={p.landAcres} onChange={(e) => updateProfile({ landAcres: e.target.value })} />
              </Field>
              <Field label={t(L, "method")}>
                <select className="field" value={p.method} onChange={(e) => updateProfile({ method: e.target.value })}>
                  <option value="">Select…</option>
                  {FARMING_METHODS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label={`${t(L, "problem")}${p.category ? "" : " *"}`}>
                <textarea rows={2} className="field" value={p.problem} onChange={(e) => updateProfile({ problem: e.target.value })} />
              </Field>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">We never ask for Aadhaar, bank account numbers or passwords.</p>
          </>
        )}

        {step === 5 && (
          <>
            <h1 className="text-3xl">{t(L, "stepPhotos")}</h1>
            <p className="mt-2 text-muted-foreground">{t(L, "photosHint")}</p>
            <p className="mt-3 rounded-xl bg-warning p-3 text-sm font-semibold text-warning-foreground">Photo analysis is coming later.</p>
            <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(e) => { addPhotos(e.target.files); e.target.value = ""; }} />
            <button type="button" className="btn-ghost mt-5" disabled={photos.length >= 4} onClick={() => fileRef.current?.click()}>
              📷 Select photos ({photos.length}/4)
            </button>
            <Err msg={errors.photos} />
            {photos.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {photos.map((ph, i) => (
                  <div key={ph.url} className="relative">
                    <img src={ph.url} alt={ph.name} className="aspect-square w-full rounded-xl object-cover" />
                    <button type="button" aria-label={`Remove ${ph.name}`} className="absolute right-1 top-1 rounded-full bg-card px-2 py-0.5 text-sm font-bold shadow"
                      onClick={() => { URL.revokeObjectURL(ph.url); setPhotos(photos.filter((_, j) => j !== i)); }}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {step === 6 && (
          <>
            <h1 className="text-3xl">{t(L, "stepReview")}</h1>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Answer mode", state.mode === "speak" ? (speech.supported ? "Speak" : "Type (voice unavailable)") : "Type"],
                ["Language", LANGUAGES.find((l) => l.code === L)?.label],
                ["Support needed", p.category ? categoryLabel(p.category) : "—"],
                ["Name", p.name || "—"], ["State", p.state], ["District", p.district || "—"],
                ["Main crop", p.crop], ["Land", p.landAcres ? `${p.landAcres} acres` : "—"],
                ["Farming method", p.method || "—"], ["Problem", p.problem || "—"],
                ["Photos", `${photos.length} (kept on device)`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-muted p-3"><dt className="text-xs font-semibold text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
            <button type="button" className="mt-4 text-sm font-semibold text-primary underline" onClick={() => go(4)}>Edit details</button>
          </>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <button type="button" className="btn-ghost" disabled={step === 1} onClick={() => go(step - 1)}>← {t(L, "back")}</button>
          {step < STEPS ? (
            <button type="button" className="btn-primary" onClick={next}>{t(L, "next")} →</button>
          ) : (
            <button type="button" className="btn-primary" onClick={submit}>🌾 {t(L, "find")}</button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <span className="label">{label}</span>
      {children}
      <Err msg={error} />
    </div>
  );
}
function Err({ msg }: { msg?: string | undefined }) {
  return msg ? <p role="alert" className="mt-2 text-sm font-semibold text-destructive">{msg}</p> : null;
}
