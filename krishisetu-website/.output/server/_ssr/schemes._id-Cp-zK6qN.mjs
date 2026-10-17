import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as categoryLabel } from "./schemes-CvNgaJj7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as StatusChip, r as regionText } from "./SchemeCard-CO7PYNL3.mjs";
import { t as SampleSourceButton } from "./SampleSourceDialog-Bc7RgIGM.mjs";
import { t as Route } from "./schemes._id-Bnmvy2FU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes._id-Cp-zK6qN.js
var import_jsx_runtime = require_jsx_runtime();
function Row({ title, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-bold uppercase tracking-wide text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children: value
		})]
	});
}
var notVerified = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-muted-foreground",
	children: "Not verified in our data — please check the official source."
});
function Detail() {
	const { scheme: s } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/schemes",
				className: "text-sm font-semibold text-primary",
				children: "← Scheme directory"
			}),
			s.isSample && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl bg-destructive p-3 text-center font-bold text-destructive-foreground",
				children: "SAMPLE DATA for design preview only. Not a real scheme."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { scheme: s }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl",
						children: s.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg text-muted-foreground",
						children: s.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: "Category",
								value: categoryLabel(s.category)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: "State / region",
								value: regionText(s)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: s.isSample ? "Eligibility (sample)" : "Eligibility",
								value: s.eligibility ?? notVerified
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: s.isSample ? "Example documents (not official)" : "Required documents",
								value: s.documents?.join(", ") ?? notVerified
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: "Benefits",
								value: s.benefits ?? notVerified
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: s.isSample ? "Example next steps" : "How to apply",
								value: s.applicationSteps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc pl-5",
									children: s.applicationSteps.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
								}) : notVerified
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								title: "Official source",
								value: s.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "font-semibold text-primary underline",
									href: s.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									children: [s.sourceUrl, " ↗"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SampleSourceButton, {})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "KrishiSetu is not a government platform. Final eligibility is decided by the relevant authority."
			})
		]
	});
}
//#endregion
export { Detail as component };
