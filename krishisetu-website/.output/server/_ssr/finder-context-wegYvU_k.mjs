import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finder-context-wegYvU_k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	mode: null,
	lang: "en",
	profile: {
		name: "",
		state: "",
		district: "",
		crop: "",
		landAcres: "",
		method: "",
		category: "",
		problem: ""
	},
	submitted: false
};
var FinderCtx = (0, import_react.createContext)(null);
var KEY = "krishisetu-finder";
function FinderProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(empty);
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = sessionStorage.getItem(KEY);
			if (raw) setState({
				...empty,
				...JSON.parse(raw)
			});
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) sessionStorage.setItem(KEY, JSON.stringify(state));
	}, [state, hydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinderCtx.Provider, {
		value: {
			state,
			hydrated,
			update: (p) => setState((s) => ({
				...s,
				...p
			})),
			updateProfile: (p) => setState((s) => ({
				...s,
				profile: {
					...s.profile,
					...p
				}
			})),
			photos,
			setPhotos
		},
		children
	});
}
function useFinder() {
	const c = (0, import_react.useContext)(FinderCtx);
	if (!c) throw new Error("useFinder must be inside FinderProvider");
	return c;
}
//#endregion
export { useFinder as n, FinderProvider as t };
