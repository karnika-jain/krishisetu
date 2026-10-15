import { Link } from "@tanstack/react-router";
import type { FarmerProfile, MatchResult } from "@/lib/matching";
import { categoryLabel } from "@/lib/schemes";
import { StatusChip } from "./SchemeCard";
import { SampleSourceButton } from "./SampleSourceDialog";

export function ResultsView({ profile, results, demo }: { profile: FarmerProfile; results: MatchResult[]; demo?: boolean }) {
  const official = results.filter((r) => !r.scheme.isSample);
  const samples = results.filter((r) => r.scheme.isSample);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-2xl border-2 border-accent bg-warning p-5 text-center">
        <p className="font-display text-2xl text-warning-foreground">Potential matches only. Not an official decision.</p>
        <p className="mt-1 text-sm text-warning-foreground">KrishiSetu never guarantees eligibility. The relevant authority decides final eligibility.</p>
      </div>
      {demo && (
        <p className="mt-4 rounded-xl bg-destructive p-3 text-center font-bold text-destructive-foreground">SAMPLE DATA for design preview only. Not real schemes.</p>
      )}

      <section className="card mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl">{demo ? "Demonstration profile" : "Your details"}</h2>
          {!demo && <Link to="/find" className="btn-ghost px-4 py-2 text-sm">✎ Edit my details</Link>}
        </div>
        <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
          {[
            ["Farmer", profile.name || "—"], ["State", profile.state], ["District", profile.district || "—"],
            ["Main crop", profile.crop], ["Land size", profile.landAcres ? `${profile.landAcres} acres` : "—"],
            ["Support needed", profile.category ? categoryLabel(profile.category) : profile.problem || "—"],
          ].map(([k, v]) => (
            <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>
      </section>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" disabled className="btn-ghost px-4 py-2 text-sm" aria-disabled="true">🔈 Listen to answer — coming soon</button>
        <span className="text-xs text-muted-foreground">Read-aloud is a planned feature and does not work yet.</span>
      </div>

      {results.length === 0 && (
        <div className="card mt-6 text-center">
          <h3 className="text-xl">No matching records found</h3>
          <p className="mt-2 text-muted-foreground">Our small dataset has nothing for these answers. Try another support category or browse the directory.</p>
          <div className="mt-4 flex justify-center gap-3"><Link to="/find" className="btn-primary">Edit answers</Link><Link to="/schemes" className="btn-ghost">Browse schemes</Link></div>
        </div>
      )}

      {official.length > 0 && <Group title="Government programmes (official links)" note="Details are not copied here — open the official portal to check eligibility, documents and how to apply." items={official} />}
      {samples.length > 0 && <Group title="Sample demonstration records" note="Fictional records. Documents and steps below are examples, not official requirements." items={samples} />}
    </div>
  );
}

function Group({ title, note, items }: { title: string; note: string; items: MatchResult[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-sm text-muted-foreground">{note}</p>
      <div className="mt-4 space-y-4">
        {items.map(({ scheme: s, status, reasons }) => (
          <article key={s.id} className="card">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip bg-primary text-primary-foreground">{status}</span>
              <StatusChip scheme={s} />
            </div>
            <h3 className="mt-3 text-2xl">{s.name}</h3>
            <p className="mt-1 text-muted-foreground">{s.description}</p>
            <h4 className="mt-4 font-bold">Why this appeared</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">{reasons.map((r) => <li key={r}>{r}</li>)}</ul>
            {s.eligibility && <><h4 className="mt-4 font-bold">Eligibility {s.isSample && "(sample)"}</h4><p className="text-sm">{s.eligibility}</p></>}
            {s.documents && <><h4 className="mt-4 font-bold">Example documents (not verified)</h4><p className="text-sm">{s.documents.join(", ")}</p></>}
            <h4 className="mt-4 font-bold">Suggested next steps</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {(s.applicationSteps ?? ["Open the official website and read the eligibility rules.", "Contact your local agriculture office to confirm."]).map((x) => <li key={x}>{x}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {s.sourceUrl ? (
                <a href={s.sourceUrl} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-sm">Open official website ↗</a>
              ) : s.isSample ? <SampleSourceButton /> : null}
              <Link to="/schemes/$id" params={{ id: s.id }} className="btn-ghost px-4 py-2 text-sm">View details</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
