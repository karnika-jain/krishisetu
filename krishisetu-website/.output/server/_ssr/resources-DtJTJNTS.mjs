import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DtJTJNTS.js
var import_jsx_runtime = require_jsx_runtime();
var OFFICIAL = [
	{
		name: "myScheme — national scheme search",
		url: "https://www.myscheme.gov.in"
	},
	{
		name: "Ministry of Agriculture & Farmers Welfare",
		url: "https://agriwelfare.gov.in"
	},
	{
		name: "PM-KISAN",
		url: "https://pmkisan.gov.in"
	},
	{
		name: "PM Fasal Bima Yojana (crop insurance)",
		url: "https://pmfby.gov.in"
	},
	{
		name: "Soil Health Card",
		url: "https://soilhealth.dac.gov.in"
	},
	{
		name: "PM Krishi Sinchayee Yojana (irrigation)",
		url: "https://pmksy.gov.in"
	},
	{
		name: "e-NAM (online mandi trading)",
		url: "https://enam.gov.in"
	}
];
var GUIDES = [
	{
		icon: "💧",
		t: "Irrigation & water",
		tips: [
			"Drip and sprinkler systems can reduce water use compared to flood irrigation.",
			"Water early morning or evening to reduce evaporation.",
			"Mulching helps keep soil moisture."
		]
	},
	{
		icon: "🟫",
		t: "Soil health",
		tips: [
			"Test your soil before deciding fertilizer amounts.",
			"Add compost or farmyard manure to improve soil structure.",
			"Rotate crops, including pulses, to support soil fertility."
		]
	},
	{
		icon: "☂",
		t: "Crop insurance",
		tips: [
			"Ask your bank, agriculture office or official portal which crops are notified in your area.",
			"Note the enrolment deadline for each season — it varies.",
			"Report crop loss quickly through official channels."
		]
	},
	{
		icon: "🐛",
		t: "Crop care & pests",
		tips: [
			"Inspect fields regularly and act early.",
			"Use pesticides only as advised by an agriculture officer and the label.",
			"Remove and destroy badly infected plants to limit spread."
		]
	},
	{
		icon: "🏪",
		t: "Market access",
		tips: [
			"Compare prices across nearby mandis before selling.",
			"Grading and clean packing can help get better prices.",
			"Farmer Producer Organisations (FPOs) can help with collective selling."
		]
	},
	{
		icon: "🌱",
		t: "Best practices",
		tips: [
			"Use quality seed from trusted sources.",
			"Keep simple records of costs, inputs and yields.",
			"Visit your nearest Krishi Vigyan Kendra (KVK) for local advice."
		]
	}
];
function Resources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "Farming resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted-foreground",
				children: "Two kinds of help: official government portals, and general tips. The tips are educational guidance only — they are not official government instructions."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-2xl",
				children: "Government support & scheme information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: OFFICIAL.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: o.url,
					target: "_blank",
					rel: "noreferrer",
					className: "card flex items-center justify-between gap-3 hover:border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip-official",
							children: "Official portal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-semibold",
							children: o.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: o.url.replace("https://", "")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "↗"
					})]
				}, o.url))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl",
				children: "General farming guidance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: GUIDES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip bg-muted text-muted-foreground",
							children: "General guidance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-3 text-xl",
							children: [
								g.icon,
								" ",
								g.t
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 list-disc space-y-1 pl-5 text-sm",
							children: g.tips.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						})
					]
				}, g.t))
			})
		]
	});
}
//#endregion
export { Resources as component };
