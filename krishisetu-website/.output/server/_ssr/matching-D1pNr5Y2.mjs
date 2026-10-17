import { o as categoryLabel, s as cropGroupOf } from "./schemes-CvNgaJj7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/matching-D1pNr5Y2.js
function matchSchemes(p, schemes) {
	const out = [];
	const group = cropGroupOf(p.crop);
	for (const s of schemes) {
		const reasons = [];
		let score = 0;
		let specific = 0;
		if (s.states.includes("ALL")) reasons.push("Listed as available across India (state rules may still apply).");
		else if (s.states.some((st) => st.toLowerCase() === p.state.toLowerCase())) {
			reasons.push(`Your state (${p.state}) is listed for this record.`);
			score += 2;
			specific++;
		} else continue;
		if (s.crops && s.crops.length) {
			if (!s.crops.some((c) => c.startsWith("group:") ? group === c.slice(6) : c.toLowerCase() === p.crop.toLowerCase())) continue;
			reasons.push(`Your crop (${p.crop}${group ? `, ${group}` : ""}) is listed for this record.`);
			score += 2;
			specific++;
		} else reasons.push("No crop restriction is recorded in our data.");
		const catHit = !!p.category && p.category === s.category;
		if (catHit) {
			reasons.push(`It covers the support you selected: ${categoryLabel(s.category)}.`);
			score += 3;
		}
		let status;
		if (catHit && specific > 0) status = "Potential match";
		else if (catHit || specific >= 2) status = "Possible match";
		else status = "Check eligibility";
		if (!s.eligibility) reasons.push("Eligibility details are not in our data — check the official source.");
		out.push({
			scheme: s,
			status,
			reasons,
			score
		});
	}
	return out.sort((a, b) => b.score - a.score);
}
var DEMO_PROFILE = {
	name: "Ramesh",
	state: "Karnataka",
	district: "Dharwad",
	landAcres: "3",
	crop: "Tomato",
	category: "irrigation",
	method: "",
	problem: ""
};
//#endregion
export { matchSchemes as n, DEMO_PROFILE as t };
