import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as SCHEMES, t as CATEGORIES } from "./schemes-CvNgaJj7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SchemeCard } from "./SchemeCard-CO7PYNL3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes.index-1lU0VyUE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Directory() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => SCHEMES.filter((s) => (!cat || s.category === cat) && (type === "all" || type === "sample" === s.isSample) && (!q || `${s.name} ${s.description}`.toLowerCase().includes(q.toLowerCase()))), [
		q,
		cat,
		type
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "Scheme directory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-muted-foreground",
				children: [
					"Records marked ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip-official",
						children: "Official source link"
					}),
					" point to real government portals. Records marked ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip-sample",
						children: "Sample data"
					}),
					" are fictional and only for demonstration."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						placeholder: "Search schemes…",
						value: q,
						onChange: (e) => setQ(e.target.value),
						"aria-label": "Search schemes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field",
						value: cat,
						onChange: (e) => setCat(e.target.value),
						"aria-label": "Category",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All categories"
						}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.label
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "field",
						value: type,
						onChange: (e) => setType(e.target.value),
						"aria-label": "Record type",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All records"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "official",
								children: "Official links only"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "sample",
								children: "Sample data only"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: [
					list.length,
					" record",
					list.length === 1 ? "" : "s"
				]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No records match your search." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-ghost mt-3",
					onClick: () => {
						setQ("");
						setCat("");
						setType("all");
					},
					children: "Clear filters"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, { scheme: s }, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm",
				children: ["Want to see the matching in action? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/demo",
					className: "font-semibold text-primary underline",
					children: "View demo results"
				})]
			})
		]
	});
}
//#endregion
export { Directory as component };
