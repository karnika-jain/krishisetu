import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SampleSourceDialog-Bc7RgIGM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SampleSourceButton() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "btn-ghost px-4 py-2 text-sm",
		onClick: () => setOpen(true),
		children: "Open official source (sample)"
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card max-w-md",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "This is a demonstration record"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This entry is fictional sample data created to preview the design. It has no official website, and KrishiSetu will not link you to an invented government page. Please check real programmes through official government sources."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-primary mt-4",
					onClick: () => setOpen(false),
					children: "I understand"
				})
			]
		})
	})] });
}
//#endregion
export { SampleSourceButton as t };
