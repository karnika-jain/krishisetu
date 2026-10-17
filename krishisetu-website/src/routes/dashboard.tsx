import { createFileRoute, Link } from "@tanstack/react-router";
import { useFinder } from "@/lib/finder-context";
import { matchSchemes } from "@/lib/matching";
import { SCHEMES, categoryLabel } from "@/lib/schemes";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — KrishiSetu" },
      { name: "description", content: "Your farm details and potential scheme matches for this browser session." },
      { property: "og:title", content: "Dashboard — KrishiSetu" },
      { property: "og:description", content: "See your saved answers and potential matches." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { state, hydrated } = useFinder();
  const p = state.profile;
  const ready = state.submitted && p.state && p.crop;
  const matches = ready ? matchSchemes(p, SCHEMES).filter((m) => !m.scheme.isSample) : [];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-[32px] md:text-[36px]">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Your answers are kept in this browser tab only. There is no account and nothing is stored on a server.</p>
      {!hydrated ? (
        <p className="mt-8 text-muted-foreground">Loading…</p>
      ) : !ready ? (
        <div className="card mt-8 text-center">
          <h2 className="text-xl">No farm details yet</h2>
          <p className="mt-2 text-muted-foreground">Answer a few questions to see potential matches here.</p>
          <Link to="/find" className="btn-primary mt-5">Find My Schemes</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="card">
            <h2 className="text-lg">Your farm</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[["State", p.state], ["District", p.district || "—"], ["Main crop", p.crop], ["Land", p.landAcres ? `${p.landAcres} acres` : "—"], ["Support needed", p.category ? categoryLabel(p.category) : p.problem || "—"]].map(([k, v]) => (
                <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
            <Link to="/find" className="btn-ghost mt-5 w-full">Edit details</Link>
          </div>
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg">Potential matches</h2>
              <Link to="/results" className="text-sm font-semibold text-primary">Full results →</Link>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Potential matches only. Not an official decision.</p>
            <ul className="mt-4 divide-y">
              {matches.map((m) => (
                <li key={m.scheme.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <Link to="/schemes/$id" params={{ id: m.scheme.id }} className="font-semibold hover:text-primary">{m.scheme.name}</Link>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{m.status}</span>
                </li>
              ))}
              {matches.length === 0 && <li className="py-3 text-muted-foreground">No matching official records.</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
