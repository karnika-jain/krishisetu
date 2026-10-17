import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as categoryLabel } from "./schemes-CvNgaJj7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SchemeCard-CO7PYNL3.js
var import_jsx_runtime = require_jsx_runtime();
function StatusChip({ scheme }) {
	return scheme.isSample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "chip-sample",
		children: "Sample data · not real"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "chip-official",
		children: "Official source link"
	});
}
function regionText(s) {
	return s.states.includes("ALL") ? "All India (as listed)" : s.states.join(", ");
}
function SchemeCard({ scheme }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/schemes/$id",
		params: { id: scheme.id },
		className: "card flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { scheme })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl",
				children: scheme.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: scheme.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📂 ", categoryLabel(scheme.category)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📍 ", regionText(scheme)] })]
			})
		]
	});
}
//#endregion
export { StatusChip as n, regionText as r, SchemeCard as t };
