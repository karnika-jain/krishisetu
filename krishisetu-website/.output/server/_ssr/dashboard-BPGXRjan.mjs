import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SCHEMES, o as categoryLabel } from "./schemes-CvNgaJj7.mjs";
import { n as useFinder } from "./finder-context-wegYvU_k.mjs";
import { n as matchSchemes } from "./matching-D1pNr5Y2.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BPGXRjan.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { state, hydrated } = useFinder();
	const p = state.profile;
	const ready = state.submitted && p.state && p.crop;
	const matches = ready ? matchSchemes(p, SCHEMES).filter((m) => !m.scheme.isSample) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[32px] md:text-[36px]",
				children: "Dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Your answers are kept in this browser tab only. There is no account and nothing is stored on a server."
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Loading…"
			}) : !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "No farm details yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Answer a few questions to see potential matches here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find",
						className: "btn-primary mt-5",
						children: "Find My Schemes"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-[1fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg",
							children: "Your farm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 space-y-3 text-sm",
							children: [
								["State", p.state],
								["District", p.district || "—"],
								["Main crop", p.crop],
								["Land", p.landAcres ? `${p.landAcres} acres` : "—"],
								["Support needed", p.category ? categoryLabel(p.category) : p.problem || "—"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: v
							})] }, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/find",
							className: "btn-ghost mt-5 w-full",
							children: "Edit details"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg",
								children: "Potential matches"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "text-sm font-semibold text-primary",
								children: "Full results →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Potential matches only. Not an official decision."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 divide-y",
							children: [matches.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-center justify-between gap-2 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/schemes/$id",
									params: { id: m.scheme.id },
									className: "font-semibold hover:text-primary",
									children: m.scheme.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground",
									children: m.status
								})]
							}, m.scheme.id)), matches.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-3 text-muted-foreground",
								children: "No matching official records."
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
