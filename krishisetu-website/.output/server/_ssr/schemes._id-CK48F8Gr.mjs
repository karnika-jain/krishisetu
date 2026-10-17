import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes._id-CK48F8Gr.js
var import_jsx_runtime = require_jsx_runtime();
function SchemeNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl",
			children: "Scheme not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/schemes",
			className: "btn-primary mt-6",
			children: "Back to directory"
		})]
	});
}
//#endregion
export { SchemeNotFound as notFoundComponent };
