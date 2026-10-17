import { i as SCHEMES } from "./schemes-CvNgaJj7.mjs";
import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes._id-Bnmvy2FU.js
var $$splitComponentImporter = () => import("./schemes._id-Cp-zK6qN.mjs");
var $$splitNotFoundComponentImporter = () => import("./schemes._id-CK48F8Gr.mjs");
var Route = createFileRoute("/schemes/$id")({
	loader: ({ params }) => {
		const scheme = SCHEMES.find((s) => s.id === params.id);
		if (!scheme) throw notFound();
		return { scheme };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Scheme not found — KrishiSetu" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.scheme;
		const title = `${s.name}${s.isSample ? " (Sample)" : ""} — KrishiSetu`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: s.description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: s.description
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
