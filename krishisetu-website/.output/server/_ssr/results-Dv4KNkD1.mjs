import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SCHEMES } from "./schemes-CvNgaJj7.mjs";
import { n as useFinder } from "./finder-context-wegYvU_k.mjs";
import { n as matchSchemes } from "./matching-D1pNr5Y2.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ResultsView } from "./ResultsView-BDnFk5lI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-Dv4KNkD1.js
var import_jsx_runtime = require_jsx_runtime();
function Results() {
	const { state, hydrated } = useFinder();
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-20 text-center text-muted-foreground",
		children: "Loading your results…"
	});
	if (!state.submitted || !state.profile.state || !state.profile.crop) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "No answers yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Complete the support finder first, or view the demonstration."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/find",
					className: "btn-primary",
					children: "Find my support"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/demo",
					className: "btn-ghost",
					children: "See demo"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsView, {
		profile: state.profile,
		results: matchSchemes(state.profile, SCHEMES)
	});
}
//#endregion
export { Results as component };
