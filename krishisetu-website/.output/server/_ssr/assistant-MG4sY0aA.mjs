import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useSiteLang } from "./site-i18n-DNSRe34H.mjs";
import { a as Send, r as Sprout, s as Mic, u as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant-MG4sY0aA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var UI = {
	en: {
		placeholder: "Ask about a scheme…",
		intro: "Ask me about government schemes for farmers — eligibility, documents or how to apply. I can make mistakes, so always check the official portal.",
		examples: [
			"What documents do I need for crop insurance?",
			"Who can apply for PM-KISAN?",
			"How do I apply for a Kisan Credit Card?"
		],
		thinking: "Thinking…",
		mic: "Voice input coming soon",
		send: "Send"
	},
	hi: {
		placeholder: "किसी योजना के बारे में पूछें…",
		intro: "किसानों के लिए सरकारी योजनाओं के बारे में पूछें — पात्रता, दस्तावेज़ या आवेदन कैसे करें। मुझसे गलती हो सकती है, इसलिए आधिकारिक पोर्टल ज़रूर जांचें।",
		examples: [
			"फसल बीमा के लिए कौन से दस्तावेज़ चाहिए?",
			"PM-KISAN के लिए कौन आवेदन कर सकता है?",
			"किसान क्रेडिट कार्ड के लिए आवेदन कैसे करें?"
		],
		thinking: "सोच रहे हैं…",
		mic: "आवाज़ सुविधा जल्द आएगी",
		send: "भेजें"
	},
	kn: {
		placeholder: "ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ…",
		intro: "ರೈತರ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ — ಅರ್ಹತೆ, ದಾಖಲೆಗಳು ಅಥವಾ ಅರ್ಜಿ ಹೇಗೆ. ನನ್ನಿಂದ ತಪ್ಪಾಗಬಹುದು, ಆದ್ದರಿಂದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಪರಿಶೀಲಿಸಿ.",
		examples: [
			"ಬೆಳೆ ವಿಮೆಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?",
			"PM-KISAN ಗೆ ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?",
			"ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗೆ ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸುವುದು?"
		],
		thinking: "ಯೋಚಿಸುತ್ತಿದೆ…",
		mic: "ಧ್ವನಿ ಸೌಲಭ್ಯ ಶೀಘ್ರದಲ್ಲೇ",
		send: "ಕಳುಹಿಸಿ"
	}
};
function Assistant() {
	const { lang } = useSiteLang();
	const ui = UI[lang];
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const endRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [messages, loading]);
	(0, import_react.useEffect)(() => {
		inputRef.current?.focus();
	}, []);
	async function send(text) {
		const q = text.trim();
		if (!q || loading) return;
		setError(null);
		const history = [...messages, {
			role: "user",
			content: q
		}];
		setMessages(history);
		setInput("");
		setLoading(true);
		try {
			const res = await fetch("/api/assistant", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: history })
			});
			if (!res.ok || !res.body) {
				const j = await res.json().catch(() => ({}));
				throw new Error(j.error ?? "Something went wrong. Please try again.");
			}
			const reader = res.body.getReader();
			const dec = new TextDecoder();
			let acc = "";
			setMessages([...history, {
				role: "assistant",
				content: ""
			}]);
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				acc += dec.decode(value, { stream: true });
				setMessages([...history, {
					role: "assistant",
					content: acc
				}]);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[min(720px,calc(100vh-10rem))] flex-col overflow-hidden rounded-3xl border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-4 overflow-y-auto p-5 md:p-6",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[85%] text-[15px] leading-relaxed",
						children: ui.intro
					})]
				}),
				messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 pl-12",
					children: ui.examples.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => send(q),
						className: "min-h-11 rounded-xl border bg-background px-4 py-2 text-left text-sm font-medium hover:border-primary",
						children: q
					}, q))
				}),
				messages.map((m, i) => m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-[15px] text-primary-foreground",
					children: m.content
				}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-[15px] leading-relaxed",
						children: renderBold(m.content)
					})]
				}, i)),
				waiting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 pl-12 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), ui.thinking]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "rounded-xl bg-destructive/10 p-3 text-sm font-medium text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex items-end gap-2 border-t p-3",
			onSubmit: (e) => {
				e.preventDefault();
				send(input);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: true,
					title: ui.mic,
					"aria-label": ui.mic,
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border text-muted-foreground opacity-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "assistant-input",
					className: "sr-only",
					children: ui.placeholder
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "assistant-input",
					ref: inputRef,
					rows: 1,
					value: input,
					placeholder: ui.placeholder,
					maxLength: 2e3,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							send(input);
						}
					},
					className: "field max-h-32 min-h-11 resize-none py-2.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading || !input.trim(),
					"aria-label": ui.send,
					className: "btn-primary h-11 w-11 shrink-0 p-0",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
				})
			]
		})]
	});
}
function renderBold(text) {
	return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, i) : part);
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-10",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[32px] md:text-[36px]",
			children: "KrishiSetu AI Assistant"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "AI answers can be wrong or out of date. They are not an official decision — always confirm on the official government portal."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assistant, {})
		})
	]
});
//#endregion
export { SplitComponent as component };
