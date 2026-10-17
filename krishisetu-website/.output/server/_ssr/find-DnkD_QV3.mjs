import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as STATES, n as CROPS, o as categoryLabel, r as FARMING_METHODS, t as CATEGORIES } from "./schemes-CvNgaJj7.mjs";
import { n as useFinder } from "./finder-context-wegYvU_k.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./find-C_REgI_G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-DnkD_QV3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGUAGES = [
	{
		code: "hi",
		label: "हिन्दी",
		english: "Hindi",
		speech: "hi-IN"
	},
	{
		code: "en",
		label: "English",
		english: "English",
		speech: "en-IN"
	},
	{
		code: "kn",
		label: "ಕನ್ನಡ",
		english: "Kannada",
		speech: "kn-IN"
	},
	{
		code: "te",
		label: "తెలుగు",
		english: "Telugu",
		speech: "te-IN"
	},
	{
		code: "ta",
		label: "தமிழ்",
		english: "Tamil",
		speech: "ta-IN"
	},
	{
		code: "ml",
		label: "മലയാളം",
		english: "Malayalam",
		speech: "ml-IN"
	},
	{
		code: "mr",
		label: "मराठी",
		english: "Marathi",
		speech: "mr-IN"
	},
	{
		code: "bn",
		label: "বাংলা",
		english: "Bengali",
		speech: "bn-IN"
	},
	{
		code: "gu",
		label: "ગુજરાતી",
		english: "Gujarati",
		speech: "gu-IN"
	},
	{
		code: "pa",
		label: "ਪੰਜਾਬੀ",
		english: "Punjabi",
		speech: "pa-IN"
	},
	{
		code: "or",
		label: "ଓଡ଼ିଆ",
		english: "Odia",
		speech: "or-IN"
	}
];
var TRANSLATED = ["en", "hi"];
var en = {
	stepMode: "How would you like to answer?",
	speak: "Speak",
	speakHint: "Use your voice",
	type: "Type",
	typeHint: "Use the keyboard",
	stepLang: "Choose your language",
	stepNeed: "What support are you looking for?",
	describe: "Or describe your problem in your own words",
	stepDetails: "Tell us about your farm",
	name: "Your name (optional)",
	state: "State",
	district: "District (optional)",
	crop: "Main crop",
	land: "Land size in acres (optional)",
	method: "Farming method (optional)",
	problem: "Main problem or support needed",
	stepPhotos: "Add photos (optional)",
	photosHint: "Up to 4 photos. They stay on your device and are never uploaded.",
	stepReview: "Check your answers",
	back: "Back",
	next: "Continue",
	find: "Find my support",
	listen: "Tap to speak",
	listening: "Listening… tap to stop",
	required: "Please fill this in."
};
var hi = {
	stepMode: "आप कैसे जवाब देना चाहेंगे?",
	speak: "बोलें",
	speakHint: "अपनी आवाज़ से",
	type: "लिखें",
	typeHint: "कीबोर्ड से",
	stepLang: "अपनी भाषा चुनें",
	stepNeed: "आपको किस तरह की सहायता चाहिए?",
	describe: "या अपनी समस्या अपने शब्दों में बताएं",
	stepDetails: "अपनी खेती के बारे में बताएं",
	name: "आपका नाम (वैकल्पिक)",
	state: "राज्य",
	district: "ज़िला (वैकल्पिक)",
	crop: "मुख्य फसल",
	land: "ज़मीन (एकड़ में, वैकल्पिक)",
	method: "खेती का तरीका (वैकल्पिक)",
	problem: "मुख्य समस्या या ज़रूरी सहायता",
	stepPhotos: "फ़ोटो जोड़ें (वैकल्पिक)",
	photosHint: "अधिकतम 4 फ़ोटो। ये आपके डिवाइस पर ही रहती हैं, अपलोड नहीं होतीं।",
	stepReview: "अपने जवाब जांचें",
	back: "पीछे",
	next: "आगे बढ़ें",
	find: "मेरी सहायता खोजें",
	listen: "बोलने के लिए दबाएं",
	listening: "सुन रहे हैं… रोकने के लिए दबाएं",
	required: "कृपया यह भरें।"
};
var t = (lang, key) => (lang === "hi" ? hi[key] : void 0) ?? en[key];
function useSpeech(lang) {
	const [supported, setSupported] = (0, import_react.useState)(false);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const recRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const w = window;
		setSupported(!!(w.SpeechRecognition || w.webkitSpeechRecognition));
	}, []);
	const stop = (0, import_react.useCallback)(() => {
		recRef.current?.stop();
		setListening(false);
	}, []);
	const start = (0, import_react.useCallback)((onText) => {
		const w = window;
		const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
		if (!SR) {
			setError("Voice input is not available in this browser. Please type instead.");
			return;
		}
		setError(null);
		const rec = new SR();
		rec.lang = lang;
		rec.interimResults = false;
		rec.maxAlternatives = 1;
		rec.onresult = (e) => {
			const text = Array.from(e.results).map((r) => r[0].transcript).join(" ").trim();
			if (text) onText(text);
			else setError("We could not hear any words. Please try again or type.");
		};
		rec.onerror = (e) => {
			setError(e.error === "not-allowed" ? "Microphone permission was denied. Please type instead." : e.error === "no-speech" ? "No speech was detected. Please try again or type." : `Voice input stopped (${e.error}). Please type instead.`);
			setListening(false);
		};
		rec.onend = () => setListening(false);
		recRef.current = rec;
		try {
			rec.start();
			setListening(true);
		} catch {
			setError("Could not start the microphone.");
		}
	}, [lang]);
	(0, import_react.useEffect)(() => () => recRef.current?.abort?.(), []);
	return {
		supported,
		listening,
		error,
		start,
		stop
	};
}
var STEPS = 6;
function Finder() {
	const { mode: modeParam } = Route.useSearch();
	const { state, update, updateProfile, photos, setPhotos } = useFinder();
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [errors, setErrors] = (0, import_react.useState)({});
	const L = state.lang;
	const speech = useSpeech(LANGUAGES.find((l) => l.code === L)?.speech ?? "en-IN");
	const p = state.profile;
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (modeParam) {
			update({ mode: modeParam });
			setStep(2);
		}
	}, [modeParam]);
	const useVoice = state.mode === "speak" && speech.supported;
	const go = (n) => {
		setErrors({});
		setStep(n);
		window.scrollTo({ top: 0 });
	};
	const next = () => {
		const e = {};
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
	const addPhotos = (files) => {
		if (!files) return;
		const room = 4 - photos.length;
		const list = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, room);
		setPhotos([...photos, ...list.map((f) => ({
			url: URL.createObjectURL(f),
			name: f.name
		}))]);
		if (Array.from(files).length > room) setErrors({ photos: "You can select up to 4 photos." });
	};
	const Mic = ({ onText }) => useVoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `btn-accent px-4 py-2 text-sm ${speech.listening ? "animate-pulse" : ""}`,
		onClick: () => speech.listening ? speech.stop() : speech.start(onText),
		children: ["🎙 ", speech.listening ? t(L, "listening") : t(L, "listen")]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex items-center gap-2",
				"aria-label": `Step ${step} of ${STEPS}`,
				children: Array.from({ length: STEPS }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}` }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-semibold text-muted-foreground",
				children: [
					"Step ",
					step,
					" of ",
					STEPS
				]
			}),
			state.mode === "speak" && !speech.supported && step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-xl bg-warning p-4 text-sm text-warning-foreground",
				children: "Voice input is not available in this browser, so we have switched to typing. Try Chrome or Edge for voice."
			}),
			speech.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-xl bg-warning p-4 text-sm text-warning-foreground",
				children: speech.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4 md:p-8",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepMode")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: ["speak", "type"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => update({ mode: m }),
								className: `option flex-col py-8 ${state.mode === m ? "option-active" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: m === "speak" ? "🎙" : "⌨️"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl",
										children: t(L, m)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: t(L, m === "speak" ? "speakHint" : "typeHint")
									})
								]
							}, m))
						}),
						state.mode === "speak" && !speech.supported && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-destructive",
							children: "Voice input is not supported in this browser. You can continue by typing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { msg: errors.mode })
					] }),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepLang")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
							children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								lang: l.code,
								onClick: () => update({ lang: l.code }),
								className: `option flex-col ${L === l.code ? "option-active" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold",
									children: l.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: l.english
								})]
							}, l.code))
						}),
						!TRANSLATED.includes(L) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 rounded-xl bg-muted p-3 text-sm text-muted-foreground",
							children: [
								"Voice input will listen in ",
								LANGUAGES.find((l) => l.code === L)?.english,
								". On-screen text is shown in English for now — full translation is coming later."
							]
						})
					] }),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepNeed")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => updateProfile({ category: p.category === c.id ? "" : c.id }),
								className: `option ${p.category === c.id ? "option-active" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted text-lg",
									children: c.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: c.label
								})]
							}, c.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "label mt-6",
							htmlFor: "problem",
							children: t(L, "describe")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "problem",
							rows: 3,
							className: "field",
							value: p.problem,
							onChange: (e) => updateProfile({ problem: e.target.value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { onText: (s) => updateProfile({ problem: [p.problem, s].filter(Boolean).join(" ") }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { msg: errors.need })
					] }),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepDetails")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: t(L, "name"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										value: p.name,
										onChange: (e) => updateProfile({ name: e.target.value })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { onText: (s) => updateProfile({ name: s }) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: `${t(L, "state")} *`,
									error: errors.state,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										value: p.state,
										onChange: (e) => updateProfile({ state: e.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select state…"
										}), STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: t(L, "district"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										value: p.district,
										onChange: (e) => updateProfile({ district: e.target.value })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { onText: (s) => updateProfile({ district: s }) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: `${t(L, "crop")} *`,
									error: errors.crop,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field",
											list: "crops",
											value: p.crop,
											placeholder: "e.g. Tomato",
											onChange: (e) => updateProfile({ crop: e.target.value })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
											id: "crops",
											children: CROPS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c }, c))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { onText: (s) => updateProfile({ crop: s }) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t(L, "land"),
									error: errors.land,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										inputMode: "decimal",
										value: p.landAcres,
										onChange: (e) => updateProfile({ landAcres: e.target.value })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t(L, "method"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										value: p.method,
										onChange: (e) => updateProfile({ method: e.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select…"
										}), FARMING_METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `${t(L, "problem")}${p.category ? "" : " *"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 2,
									className: "field",
									value: p.problem,
									onChange: (e) => updateProfile({ problem: e.target.value })
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "We never ask for Aadhaar, bank account numbers or passwords."
						})
					] }),
					step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepPhotos")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: t(L, "photosHint")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 rounded-xl bg-warning p-3 text-sm font-semibold text-warning-foreground",
							children: "Photo analysis is coming later."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: "image/*",
							multiple: true,
							hidden: true,
							onChange: (e) => {
								addPhotos(e.target.files);
								e.target.value = "";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-ghost mt-5",
							disabled: photos.length >= 4,
							onClick: () => fileRef.current?.click(),
							children: [
								"📷 Select photos (",
								photos.length,
								"/4)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { msg: errors.photos }),
						photos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4",
							children: photos.map((ph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ph.url,
									alt: ph.name,
									className: "aspect-square w-full rounded-xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Remove ${ph.name}`,
									className: "absolute right-1 top-1 rounded-full bg-card px-2 py-0.5 text-sm font-bold shadow",
									onClick: () => {
										URL.revokeObjectURL(ph.url);
										setPhotos(photos.filter((_, j) => j !== i));
									},
									children: "✕"
								})]
							}, ph.url))
						})
					] }),
					step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl",
							children: t(L, "stepReview")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [
								["Answer mode", state.mode === "speak" ? speech.supported ? "Speak" : "Type (voice unavailable)" : "Type"],
								["Language", LANGUAGES.find((l) => l.code === L)?.label],
								["Support needed", p.category ? categoryLabel(p.category) : "—"],
								["Name", p.name || "—"],
								["State", p.state],
								["District", p.district || "—"],
								["Main crop", p.crop],
								["Land", p.landAcres ? `${p.landAcres} acres` : "—"],
								["Farming method", p.method || "—"],
								["Problem", p.problem || "—"],
								["Photos", `${photos.length} (kept on device)`]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-muted p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs font-semibold text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: v
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-4 text-sm font-semibold text-primary underline",
							onClick: () => go(4),
							children: "Edit details"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-ghost",
							disabled: step === 1,
							onClick: () => go(step - 1),
							children: ["← ", t(L, "back")]
						}), step < STEPS ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-primary",
							onClick: next,
							children: [t(L, "next"), " →"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn-primary",
							onClick: submit,
							children: ["🌾 ", t(L, "find")]
						})]
					})
				]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label",
				children: label
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { msg: error })
		]
	});
}
function Err({ msg }) {
	return msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "mt-2 text-sm font-semibold text-destructive",
		children: msg
	}) : null;
}
//#endregion
export { Finder as component };
