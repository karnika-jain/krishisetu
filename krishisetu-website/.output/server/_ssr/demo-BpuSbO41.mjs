import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SCHEMES } from "./schemes-CvNgaJj7.mjs";
import { n as matchSchemes, t as DEMO_PROFILE } from "./matching-D1pNr5Y2.mjs";
import { t as ResultsView } from "./ResultsView-BDnFk5lI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-BpuSbO41.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsView, {
	demo: true,
	profile: DEMO_PROFILE,
	results: matchSchemes(DEMO_PROFILE, SCHEMES.filter((s) => s.isSample))
});
//#endregion
export { SplitComponent as component };
