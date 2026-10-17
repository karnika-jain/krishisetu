import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteLangProvider, r as useSiteLang, t as SITE_LANGS } from "./site-i18n-DNSRe34H.mjs";
import { c as MessageCircle, l as Menu, r as Sprout, t as X } from "../_libs/lucide-react.mjs";
import { t as FinderProvider } from "./finder-context-wegYvU_k.mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$10 } from "./find-C_REgI_G.mjs";
import { t as Route$11 } from "./schemes._id-Bnmvy2FU.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BRNHWjt8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DehYzeME.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex min-h-11 items-center gap-2.5",
		"aria-label": "KrishiSetu home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xl font-bold text-foreground",
			children: "KrishiSetu"
		})]
	});
}
function LangSelect() {
	const { lang, setLang } = useSiteLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		"aria-label": "Language",
		value: lang,
		onChange: (e) => setLang(e.target.value),
		className: "min-h-11 rounded-xl border bg-card px-3 text-sm font-semibold focus:border-primary focus:outline-none",
		children: SITE_LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: l.code,
			children: l.label
		}, l.code))
	});
}
function SiteHeader() {
	const { s } = useSiteLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			to: "/",
			label: s("home")
		},
		{
			to: "/schemes",
			label: s("explore")
		},
		{
			to: "/dashboard",
			label: s("dashboard")
		}
	];
	const navLink = "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b bg-background/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Main",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: navLink,
						activeProps: { className: "text-foreground font-semibold" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSelect, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/assistant",
							className: "btn-ghost px-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), s("assistant")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/find",
							className: "btn-primary px-4 text-sm",
							children: s("getStarted")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid h-11 w-11 place-items-center rounded-xl border md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t bg-background px-4 pb-4 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col py-2",
				"aria-label": "Mobile",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					className: navLink,
					activeProps: { className: "text-foreground font-semibold" },
					children: l.label
				}, l.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSelect, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/assistant",
						onClick: () => setOpen(false),
						className: "btn-ghost",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), s("assistant")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find",
						onClick: () => setOpen(false),
						className: "btn-primary",
						children: s("getStarted")
					})
				]
			})]
		})]
	});
}
var OFFICIAL = [
	{
		name: "myScheme",
		url: "https://www.myscheme.gov.in"
	},
	{
		name: "Dept. of Agriculture & Farmers Welfare",
		url: "https://agriwelfare.gov.in"
	},
	{
		name: "PM-KISAN",
		url: "https://pmkisan.gov.in"
	},
	{
		name: "PMFBY",
		url: "https://pmfby.gov.in"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-20 border-t bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[2fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm text-muted-foreground",
						children: "Bridging Farmers to the Right Support. KrishiSetu is an independent prototype, not an official government platform — always confirm details on official government portals."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: "KrishiSetu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [[
						"About",
						"Contact",
						"Privacy",
						"Terms"
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						title: "Page coming soon",
						children: [
							x,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: "(coming soon)"
							})
						]
					}) }, x)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/resources",
						className: "hover:text-foreground",
						children: "Farming resources"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: "Official resources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: OFFICIAL.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: o.url,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-foreground",
						children: [o.name, " ↗"]
					}) }, o.url))
				})] })
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "btn-primary mt-6",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or go home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-ghost",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "KrishiSetu — Bridging Farmers to the Right Support" },
			{
				name: "description",
				content: "Find potentially relevant government schemes and farming support in your language."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLangProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinderProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		] }) })
	});
}
var $$splitComponentImporter$7 = () => import("./routes-BehWINc-.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "KrishiSetu — Bridging Farmers to the Right Support" },
		{
			name: "description",
			content: "Discover government schemes that may fit your farm, with eligibility guidance, documents and official links — in English, Hindi or Kannada."
		},
		{
			property: "og:title",
			content: "KrishiSetu — Bridging Farmers to the Right Support"
		},
		{
			property: "og:description",
			content: "Find potentially relevant agricultural schemes and ask the KrishiSetu AI Assistant."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./assistant-MG4sY0aA.mjs");
var Route$7 = createFileRoute("/assistant")({
	head: () => ({ meta: [
		{ title: "AI Assistant — KrishiSetu" },
		{
			name: "description",
			content: "Ask simple questions about Indian agricultural schemes in English, Hindi or Kannada."
		},
		{
			property: "og:title",
			content: "KrishiSetu AI Assistant"
		},
		{
			property: "og:description",
			content: "Ask about scheme eligibility, documents and application steps."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./dashboard-BPGXRjan.mjs");
var Route$6 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "Dashboard — KrishiSetu" },
		{
			name: "description",
			content: "Your farm details and potential scheme matches for this browser session."
		},
		{
			property: "og:title",
			content: "Dashboard — KrishiSetu"
		},
		{
			property: "og:description",
			content: "See your saved answers and potential matches."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./demo-BpuSbO41.mjs");
var Route$5 = createFileRoute("/demo")({
	head: () => ({ meta: [
		{ title: "Demo Results (Sample Data) — KrishiSetu" },
		{
			name: "description",
			content: "Design preview using a fictional farmer profile and fictional sample records."
		},
		{
			property: "og:title",
			content: "Demo Results (Sample Data) — KrishiSetu"
		},
		{
			property: "og:description",
			content: "SAMPLE DATA for design preview only. Not real schemes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./resources-DtJTJNTS.mjs");
var Route$4 = createFileRoute("/resources")({
	head: () => ({ meta: [
		{ title: "Farming Resources — KrishiSetu" },
		{
			name: "description",
			content: "General farming guidance on water, soil, insurance, pests and markets, with official government portal links."
		},
		{
			property: "og:title",
			content: "Farming Resources — KrishiSetu"
		},
		{
			property: "og:description",
			content: "Helpful farming guidance and official government portals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./results-Dv4KNkD1.mjs");
var Route$3 = createFileRoute("/results")({
	head: () => ({ meta: [
		{ title: "Your Potential Matches — KrishiSetu" },
		{
			name: "description",
			content: "Potentially relevant support based on your answers. Not an official decision."
		},
		{
			property: "og:title",
			content: "Your Potential Matches — KrishiSetu"
		},
		{
			property: "og:description",
			content: "Rule-based potential matches with clear explanations."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./schemes-C8xu7CFA.mjs");
var Route$2 = createFileRoute("/schemes")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
function bad(status, message) {
	return new Response(JSON.stringify({ error: message }), {
		status,
		headers: { "Content-Type": "application/json" }
	});
}
var Route$1 = createFileRoute("/api/assistant")({ server: { handlers: { POST: async ({ request }) => {
	const key = processModule.env["LOVABLE_API_KEY"];
	if (!key) return bad(500, "The assistant is not configured yet.");
	let messages;
	try {
		const body = await request.json();
		if (!Array.isArray(body.messages)) throw new Error();
		messages = body.messages.filter((m) => !!m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string").slice(-12).map((m) => ({
			role: m.role,
			content: m.content.slice(0, 2e3)
		}));
		if (!messages.length || messages[messages.length - 1]?.role !== "user") throw new Error();
	} catch {
		return bad(400, "Please type a question.");
	}
	const { ASSISTANT_INSTRUCTIONS } = await import("./assistant-prompt.server-CaGGrkv2.mjs");
	const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
		method: "POST",
		signal: request.signal,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${key}`,
			"Lovable-API-Key": key,
			"X-Lovable-AIG-SDK": "fetch"
		},
		body: JSON.stringify({
			model: "openai/gpt-6-astra",
			instructions: ASSISTANT_INSTRUCTIONS,
			input: messages.map((m) => ({
				role: m.role,
				content: m.content
			})),
			reasoning: { effort: "low" },
			store: false,
			stream: true
		})
	});
	if (!upstream.ok || !upstream.body) {
		const text = await upstream.text().catch(() => "");
		console.error(`Assistant gateway error [${upstream.status}]: ${text}`);
		const msg = upstream.status === 429 ? "The assistant is busy right now. Please try again in a minute." : upstream.status === 402 ? "The assistant has run out of AI credits for now." : upstream.status === 403 ? "The assistant is not available for this workspace right now." : "The assistant could not answer right now. Please try again later.";
		return bad(upstream.status, msg);
	}
	const reader = upstream.body.getReader();
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	const stream = new ReadableStream({
		async start(controller) {
			let buf = "";
			try {
				for (;;) {
					const { done, value } = await reader.read();
					if (done) break;
					buf += decoder.decode(value, { stream: true });
					const lines = buf.split("\n");
					buf = lines.pop() ?? "";
					for (const line of lines) {
						if (!line.startsWith("data:")) continue;
						const data = line.slice(5).trim();
						if (!data || data === "[DONE]") continue;
						try {
							const ev = JSON.parse(data);
							if (ev.type === "response.output_text.delta" && typeof ev.delta === "string") controller.enqueue(encoder.encode(ev.delta));
							if (ev.type === "response.failed" || ev.type === "error") controller.enqueue(encoder.encode("\n\n[The answer was interrupted. Please try again.]"));
						} catch {}
					}
				}
			} catch {} finally {
				controller.close();
			}
		},
		cancel() {
			reader.cancel().catch(() => {});
		}
	});
	const headers = new Headers({
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "no-cache"
	});
	const runId = upstream.headers.get("X-Lovable-AIG-Run-ID");
	if (runId) headers.set("X-Lovable-AIG-Run-ID", runId);
	return new Response(stream, { headers });
} } } });
var $$splitComponentImporter = () => import("./schemes.index-1lU0VyUE.mjs");
var Route = createFileRoute("/schemes/")({
	head: () => ({ meta: [
		{ title: "Scheme Directory — KrishiSetu" },
		{
			name: "description",
			content: "Search and filter scheme records, clearly marked as official links or sample data."
		},
		{
			property: "og:title",
			content: "Scheme Directory — KrishiSetu"
		},
		{
			property: "og:description",
			content: "Browse government programme links and sample records by category."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AssistantRoute = Route$7.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => Route$9
});
var DashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$9
});
var DemoRoute = Route$5.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$9
});
var FindRoute = Route$10.update({
	id: "/find",
	path: "/find",
	getParentRoute: () => Route$9
});
var ResourcesRoute = Route$4.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$9
});
var ResultsRoute = Route$3.update({
	id: "/results",
	path: "/results",
	getParentRoute: () => Route$9
});
var SchemesRoute = Route$2.update({
	id: "/schemes",
	path: "/schemes",
	getParentRoute: () => Route$9
});
var ApiAssistantRoute = Route$1.update({
	id: "/api/assistant",
	path: "/api/assistant",
	getParentRoute: () => Route$9
});
var SchemesIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => SchemesRoute
});
var SchemesRouteChildren = {
	SchemesIdRoute: Route$11.update({
		id: "/$id",
		path: "/$id",
		getParentRoute: () => SchemesRoute
	}),
	SchemesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AssistantRoute,
	DashboardRoute,
	DemoRoute,
	FindRoute,
	ResourcesRoute,
	ResultsRoute,
	SchemesRoute: SchemesRoute._addFileChildren(SchemesRouteChildren),
	ApiAssistantRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
