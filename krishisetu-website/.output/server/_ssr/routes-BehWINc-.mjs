import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useSiteLang } from "./site-i18n-DNSRe34H.mjs";
import { c as MessageCircle, d as ListChecks, f as FileText, h as ArrowRight, i as ShieldCheck, m as ArrowUpRight, n as Tractor, o as Search, p as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { i as SCHEMES } from "./schemes-CvNgaJj7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BehWINc-.js
var import_jsx_runtime = require_jsx_runtime();
var hero_farmer_default = "/assets/hero-farmer-BF_uo4EH.jpg";
var field_default = "/assets/field-Bvsw4YA9.jpg";
var FEATURED = [
	{
		id: "pm-kisan",
		tag: "Income support",
		short: "PM-KISAN",
		full: "Pradhan Mantri Kisan Samman Nidhi"
	},
	{
		id: "pmfby",
		tag: "Insurance",
		short: "PMFBY",
		full: "Pradhan Mantri Fasal Bima Yojana"
	},
	{
		id: "kcc",
		tag: "Credit",
		short: "Kisan Credit Card",
		full: "KCC Scheme"
	}
];
function Home() {
	const { s } = useSiteLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "inline-flex rounded-full border bg-card px-3 py-1 text-sm font-medium text-primary",
					children: s("tagline")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-[32px] leading-[1.15] md:text-[48px]",
					children: s("heroTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground",
					children: s("heroText")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/find",
						className: "btn-primary",
						children: [
							s("findSchemes"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/schemes",
						className: "btn-ghost",
						children: s("explore")
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_farmer_default,
					alt: "Farmer checking his phone in a wheat field",
					width: 1024,
					height: 1152,
					className: "aspect-[5/5.2] w-full rounded-3xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-0 left-4 right-4 rounded-2xl border bg-card p-4 shadow-lg sm:left-auto sm:right-6 sm:w-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: [s("sampleCard"), " · Potential match"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-bold",
							children: "PMFBY · Crop Insurance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Example of how a result looks — not an assessment."
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[32px] md:text-[36px]",
				children: s("howTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: [
					{
						Icon: Tractor,
						t: s("how1t"),
						d: s("how1d")
					},
					{
						Icon: Search,
						t: s("how2t"),
						d: s("how2d")
					},
					{
						Icon: FileText,
						t: s("how3t"),
						d: s("how3d")
					}
				].map(({ Icon, t, d }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl font-bold text-muted-foreground/50",
								children: ["0", i + 1]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-lg",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: d
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-soft py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[32px] md:text-[36px]",
						children: s("featuredTitle")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: s("featuredText")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/schemes",
						className: "inline-flex min-h-11 items-center gap-1 font-semibold text-primary",
						children: [
							s("viewAll"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: FEATURED.map((f) => {
						const sc = SCHEMES.find((x) => x.id === f.id);
						if (!sc) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card flex flex-col p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground",
										children: f.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/schemes/$id",
										params: { id: f.id },
										"aria-label": `${f.short} details`,
										className: "grid h-11 w-11 place-items-center rounded-lg hover:bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-xl",
									children: f.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: f.full
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-[15px]",
									children: sc.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: s("eligibilityNote")
								}),
								sc.sourceUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: sc.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-auto inline-flex min-h-11 items-center gap-1 pt-4 text-sm font-semibold text-primary",
									children: [
										sc.sourceUrl.replace("https://", ""),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
									]
								})
							]
						}, f.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: field_default,
				alt: "Rows of young crops beside an irrigation canal",
				width: 1280,
				height: 960,
				loading: "lazy",
				className: "aspect-[4/3] w-full rounded-3xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[32px] leading-tight md:text-[36px]",
				children: s("everythingTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-8 sm:grid-cols-2",
				children: [
					{
						Icon: Search,
						t: s("f1t"),
						d: s("f1d")
					},
					{
						Icon: ShieldCheck,
						t: s("f2t"),
						d: s("f2d")
					},
					{
						Icon: ListChecks,
						t: s("f3t"),
						d: s("f3d")
					},
					{
						Icon: ClipboardCheck,
						t: s("f4t"),
						d: s("f4d")
					}
				].map(({ Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-lg",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[15px] text-muted-foreground",
						children: d
					})
				] }, t))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 rounded-3xl bg-forest p-8 text-forest-foreground md:grid-cols-2 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-accent",
						children: s("aiLabel")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[32px] leading-tight md:text-[36px]",
						children: s("aiTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg opacity-80",
						children: s("aiText")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/assistant",
						className: "btn-accent mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), s("openAssistant")]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-5",
					"aria-label": "Sample chat preview",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold uppercase tracking-wide opacity-60",
							children: s("sampleCard")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ml-auto w-fit max-w-[85%] rounded-2xl bg-accent px-4 py-2.5 text-sm text-accent-foreground",
							children: s("sampleQ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[95%] text-[15px] leading-relaxed",
							children: s("sampleA")
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
