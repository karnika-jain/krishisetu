import { createFileRoute } from "@tanstack/react-router";
import { DEMO_PROFILE, matchSchemes } from "@/lib/matching";
import { SCHEMES } from "@/lib/schemes";
import { ResultsView } from "@/components/ResultsView";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demo Results (Sample Data) — KrishiSetu" },
      { name: "description", content: "Design preview using a fictional farmer profile and fictional sample records." },
      { property: "og:title", content: "Demo Results (Sample Data) — KrishiSetu" },
      { property: "og:description", content: "SAMPLE DATA for design preview only. Not real schemes." },
    ],
  }),
  component: () => (
    <ResultsView demo profile={DEMO_PROFILE} results={matchSchemes(DEMO_PROFILE, SCHEMES.filter((s) => s.isSample))} />
  ),
});
