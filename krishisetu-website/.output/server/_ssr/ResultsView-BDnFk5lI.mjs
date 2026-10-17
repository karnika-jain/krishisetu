import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as categoryLabel } from "./schemes-CvNgaJj7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as StatusChip } from "./SchemeCard-CO7PYNL3.mjs";
import { t as SampleSourceButton } from "./SampleSourceDialog-Bc7RgIGM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ResultsView-BDnFk5lI.js
var import_jsx_runtime = require_jsx_runtime();
function ResultsView({ profile, results, demo }) {
	const official = results.filter((r) => !r.scheme.isSample);
	const samples = results.filter((r) => r.scheme.isSample);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border-2 border-accent bg-warning p-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-warning-foreground",
					children: "Potential matches only. Not an official decision."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-warning-foreground",
					children: "KrishiSetu never guarantees eligibility. The relevant authority decides final eligibility."
				})]
			}),
			demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl bg-destructive p-3 text-center font-bold text-destructive-foreground",
				children: "SAMPLE DATA for design preview only. Not real schemes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: demo ? "Demonstration profile" : "Your details"
					}), !demo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find",
						className: "btn-ghost px-4 py-2 text-sm",
						children: "✎ Edit my details"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-4 grid gap-2 text-sm sm:grid-cols-3",
					children: [
						["Farmer", profile.name || "—"],
						["State", profile.state],
						["District", profile.district || "—"],
						["Main crop", profile.crop],
						["Land size", profile.landAcres ? `${profile.landAcres} acres` : "—"],
						["Support needed", profile.category ? categoryLabel(profile.category) : profile.problem || "—"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-semibold",
						children: v
					})] }, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: true,
					className: "btn-ghost px-4 py-2 text-sm",
					"aria-disabled": "true",
					children: "🔈 Listen to answer — coming soon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Read-aloud is a planned feature and does not work yet."
				})]
			}),
			results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: "No matching records found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Our small dataset has nothing for these answers. Try another support category or browse the directory."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/find",
							className: "btn-primary",
							children: "Edit answers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/schemes",
							className: "btn-ghost",
							children: "Browse schemes"
						})]
					})
				]
			}),
			official.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				title: "Government programmes (official links)",
				note: "Details are not copied here — open the official portal to check eligibility, documents and how to apply.",
				items: official
			}),
			samples.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				title: "Sample demonstration records",
				note: "Fictional records. Documents and steps below are examples, not official requirements.",
				items: samples
			})
		]
	});
}
function Group({ title, note, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-4",
				children: items.map(({ scheme: s, status, reasons }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip bg-primary text-primary-foreground",
								children: status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { scheme: s })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: s.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-4 font-bold",
							children: "Why this appeared"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 list-disc space-y-1 pl-5 text-sm",
							children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
						}),
						s.eligibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "mt-4 font-bold",
							children: ["Eligibility ", s.isSample && "(sample)"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: s.eligibility
						})] }),
						s.documents && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-4 font-bold",
							children: "Example documents (not verified)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: s.documents.join(", ")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-4 font-bold",
							children: "Suggested next steps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 list-disc space-y-1 pl-5 text-sm",
							children: (s.applicationSteps ?? ["Open the official website and read the eligibility rules.", "Contact your local agriculture office to confirm."]).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-3",
							children: [s.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.sourceUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-primary px-4 py-2 text-sm",
								children: "Open official website ↗"
							}) : s.isSample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleSourceButton, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/schemes/$id",
								params: { id: s.id },
								className: "btn-ghost px-4 py-2 text-sm",
								children: "View details"
							})]
						})
					]
				}, s.id))
			})
		]
	});
}
//#endregion
export { ResultsView as t };
