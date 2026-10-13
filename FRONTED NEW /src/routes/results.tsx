import { createFileRoute, Link } from "@tanstack/react-router";
import { useFinder } from "@/lib/finder-context";
import { matchSchemes } from "@/lib/matching";
import { SCHEMES } from "@/lib/schemes";
import { ResultsView } from "@/components/ResultsView";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Your Potential Matches — KrishiSetu" },
      { name: "description", content: "Potentially relevant support based on your answers. Not an official decision." },
      { property: "og:title", content: "Your Potential Matches — KrishiSetu" },
      { property: "og:description", content: "Rule-based potential matches with clear explanations." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Results,
});

function Results() {
  const { state, hydrated } = useFinder();
  if (!hydrated) return <p className="py-20 text-center text-muted-foreground">Loading your results…</p>;
  if (!state.submitted || !state.profile.state || !state.profile.crop) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-3xl">No answers yet</h1>
        <p className="mt-2 text-muted-foreground">Complete the support finder first, or view the demonstration.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/find" className="btn-primary">Find my support</Link>
          <Link to="/demo" className="btn-ghost">See demo</Link>
        </div>
      </div>
    );
  }
  return <ResultsView profile={state.profile} results={matchSchemes(state.profile, SCHEMES)} />;
}
