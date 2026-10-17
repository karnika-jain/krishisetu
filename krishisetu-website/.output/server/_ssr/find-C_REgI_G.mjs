import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-C_REgI_G.js
var $$splitComponentImporter = () => import("./find-DnkD_QV3.mjs");
var Route = createFileRoute("/find")({
	validateSearch: (s) => s["mode"] === "speak" || s["mode"] === "type" ? { mode: s["mode"] } : {},
	head: () => ({ meta: [
		{ title: "Find My Support — KrishiSetu" },
		{
			name: "description",
			content: "Answer a few simple questions by voice or text to see potentially relevant farm support."
		},
		{
			property: "og:title",
			content: "Find My Support — KrishiSetu"
		},
		{
			property: "og:description",
			content: "A guided, step-by-step support finder for farmers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
