globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-17T06:11:35.924Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"17b-nrGDt2e/SF1WytSXq86MknYNd3Y\"",
		"mtime": "2026-10-17T06:11:35.924Z",
		"size": 379,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-17T06:11:35.924Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/SampleSourceDialog-CW_uPHX0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"427-OBHdX6TmXk6URrnnfhUY3cvjM5g\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 1063,
		"path": "../public/assets/SampleSourceDialog-CW_uPHX0.js"
	},
	"/assets/ResultsView-C1xstTFG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d0-KqsnFtCiivOV8AcpLHv1oTumxgk\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 5072,
		"path": "../public/assets/ResultsView-C1xstTFG.js"
	},
	"/assets/SchemeCard-DN-H_J18.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-YgtVvaUJiednqXpDpi33QkJ77ZE\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 1069,
		"path": "../public/assets/SchemeCard-DN-H_J18.js"
	},
	"/assets/demo-CE2R7L6n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-tw+FH+yRiYASrL4UdsCX0MWTfLo\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 286,
		"path": "../public/assets/demo-CE2R7L6n.js"
	},
	"/assets/assistant-DV2a9PXs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c1c-477QYcmWAvPm2Y/5L7H3IxOMD8A\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 7196,
		"path": "../public/assets/assistant-DV2a9PXs.js"
	},
	"/assets/dashboard-D0tjFMpq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa2-XIC2aIujzeXT4VXzn75CtCOvtts\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 2722,
		"path": "../public/assets/dashboard-D0tjFMpq.js"
	},
	"/assets/find-DJhjiOLT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"361c-kMSEDa+Iku7x2xdGaef3Q9DRZ4Y\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 13852,
		"path": "../public/assets/find-DJhjiOLT.js"
	},
	"/assets/hero-farmer-BF_uo4EH.jpg": {
		"type": "image/jpeg",
		"etag": "\"240f2-D+kmPM14KsbDY2COjAGWwrhtwlU\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 147698,
		"path": "../public/assets/hero-farmer-BF_uo4EH.jpg"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/matching-D6Y28mEg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"493-eK8SkeupJR9HdjkeV/+GuP+dZ2Y\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 1171,
		"path": "../public/assets/matching-D6Y28mEg.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/react-BiuhUkGL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ebf-RwZSbIxNH7jHDTdGVimxmj+v6Hc\"",
		"mtime": "2026-10-17T06:11:35.660Z",
		"size": 7871,
		"path": "../public/assets/react-BiuhUkGL.js"
	},
	"/assets/resources-Bw7hBuh5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d95-gOrJV0Xy9bu847hI/WXkbmEUN0k\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 3477,
		"path": "../public/assets/resources-Bw7hBuh5.js"
	},
	"/assets/results-enzR_akl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d0-NrTTglh3nfsxvuze9I0ddX8fbVw\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 976,
		"path": "../public/assets/results-enzR_akl.js"
	},
	"/assets/field-Bvsw4YA9.jpg": {
		"type": "image/jpeg",
		"etag": "\"45925-mdl/ZVNarMyt9Xbp3wMwjZEYuAY\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 284965,
		"path": "../public/assets/field-Bvsw4YA9.jpg"
	},
	"/assets/schemes-D5oruGUH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-go0Lgnipr21/mBCGhBvtTl7Qzrg\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 141,
		"path": "../public/assets/schemes-D5oruGUH.js"
	},
	"/assets/schemes._id-CJ5mRX8T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ed-cYWJ1yjba9DKE4D+H2Ualtn2iXs\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 2285,
		"path": "../public/assets/schemes._id-CJ5mRX8T.js"
	},
	"/assets/routes-CtrB3j4i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2082-o06D/MfhrHO2VgxeB3nF/oc9MoY\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 8322,
		"path": "../public/assets/routes-CtrB3j4i.js"
	},
	"/assets/schemes._id-DihZuQH0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169-WOKvoPt72l7RHw0H3/UVXstXZeQ\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 361,
		"path": "../public/assets/schemes._id-DihZuQH0.js"
	},
	"/assets/schemes.index-DTEx0nIP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"988-2M0ak+/nSdOkr71Zm/kFFuQOxGM\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 2440,
		"path": "../public/assets/schemes.index-DTEx0nIP.js"
	},
	"/assets/styles-DehYzeME.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14b35-e5l9K6i9HlDPoP0lfu6LG34+SAc\"",
		"mtime": "2026-10-17T06:11:35.661Z",
		"size": 84789,
		"path": "../public/assets/styles-DehYzeME.css"
	},
	"/assets/index-BQ7eBohS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5eef7-WTsom8QhY/SX/5WjzpLnW+RHhGA\"",
		"mtime": "2026-10-17T06:11:35.659Z",
		"size": 388855,
		"path": "../public/assets/index-BQ7eBohS.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_kWQp6Y = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_kWQp6Y
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
