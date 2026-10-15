// Deterministic, rule-based matching. No AI. Kept separate from the UI so
// verified records can be added to schemes.json without code changes.
import { cropGroupOf, categoryLabel, type CategoryId, type Scheme } from "./schemes";

export interface FarmerProfile {
  name?: string;
  state: string;
  district?: string;
  crop: string;
  landAcres?: string;
  method?: string;
  category?: CategoryId | "";
  problem?: string;
}

export type MatchStatus = "Potential match" | "Possible match" | "Check eligibility";

export interface MatchResult {
  scheme: Scheme;
  status: MatchStatus;
  reasons: string[];
  score: number;
}

export function matchSchemes(p: FarmerProfile, schemes: Scheme[]): MatchResult[] {
  const out: MatchResult[] = [];
  const group = cropGroupOf(p.crop);

  for (const s of schemes) {
    const reasons: string[] = [];
    let score = 0;
    let specific = 0;

    // State rule
    if (s.states.includes("ALL")) {
      reasons.push("Listed as available across India (state rules may still apply).");
    } else if (s.states.some((st) => st.toLowerCase() === p.state.toLowerCase())) {
      reasons.push(`Your state (${p.state}) is listed for this record.`);
      score += 2; specific++;
    } else continue; // state restriction exists and does not include farmer's state

    // Crop rule
    if (s.crops && s.crops.length) {
      const hit = s.crops.some((c) =>
        c.startsWith("group:")
          ? group === c.slice(6)
          : c.toLowerCase() === p.crop.toLowerCase(),
      );
      if (!hit) continue;
      reasons.push(`Your crop (${p.crop}${group ? `, ${group}` : ""}) is listed for this record.`);
      score += 2; specific++;
    } else {
      reasons.push("No crop restriction is recorded in our data.");
    }

    // Category rule
    const catHit = !!p.category && p.category === s.category;
    if (catHit) {
      reasons.push(`It covers the support you selected: ${categoryLabel(s.category)}.`);
      score += 3;
    }

    let status: MatchStatus;
    if (catHit && specific > 0) status = "Potential match";
    else if (catHit || specific >= 2) status = "Possible match";
    else status = "Check eligibility";

    if (!s.eligibility) reasons.push("Eligibility details are not in our data — check the official source.");
    out.push({ scheme: s, status, reasons, score });
  }
  return out.sort((a, b) => b.score - a.score);
}

export const DEMO_PROFILE: FarmerProfile = {
  name: "Ramesh",
  state: "Karnataka",
  district: "Dharwad",
  landAcres: "3",
  crop: "Tomato",
  category: "irrigation",
  method: "",
  problem: "",
};
