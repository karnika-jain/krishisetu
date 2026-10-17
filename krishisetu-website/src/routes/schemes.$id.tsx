import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SCHEMES, categoryLabel } from "@/lib/schemes";
import { StatusChip, regionText } from "@/components/SchemeCard";
import { SampleSourceButton } from "@/components/SampleSourceDialog";

export const Route = createFileRoute("/schemes/$id")({
  loader: ({ params }) => {
    const scheme = SCHEMES.find((s) => s.id === params.id);
    if (!scheme) throw notFound();
    return { scheme };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Scheme not found — KrishiSetu" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.scheme;
    const title = `${s.name}${s.isSample ? " (Sample)" : ""} — KrishiSetu`;
    return { meta: [
      { title }, { name: "description", content: s.description },
      { property: "og:title", content: title }, { property: "og:description", content: s.description },
    ] };
  },
  notFoundComponent: SchemeNotFound,
  component: Detail,
});

function SchemeNotFound() {
  return <div className="py-20 text-center"><h1 className="text-3xl">Scheme not found</h1><Link to="/schemes" className="btn-primary mt-6">Back to directory</Link></div>;
}

function Row({ title, value }: { title: string; value: React.ReactNode }) {
  return <div className="border-t py-4"><h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{title}</h2><div className="mt-1">{value}</div></div>;
}
const notVerified = <span className="text-muted-foreground">Not verified in our data — please check the official source.</span>;

function Detail() {
  const { scheme: s } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/schemes" className="text-sm font-semibold text-primary">← Scheme directory</Link>
      {s.isSample && <p className="mt-4 rounded-xl bg-destructive p-3 text-center font-bold text-destructive-foreground">SAMPLE DATA for design preview only. Not a real scheme.</p>}
      <div className="card mt-4 md:p-8">
        <StatusChip scheme={s} />
        <h1 className="mt-3 text-4xl">{s.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{s.description}</p>
        <div className="mt-6">
          <Row title="Category" value={categoryLabel(s.category)} />
          <Row title="State / region" value={regionText(s)} />
          <Row title={s.isSample ? "Eligibility (sample)" : "Eligibility"} value={s.eligibility ?? notVerified} />
          <Row title={s.isSample ? "Example documents (not official)" : "Required documents"} value={s.documents?.join(", ") ?? notVerified} />
          <Row title="Benefits" value={s.benefits ?? notVerified} />
          <Row title={s.isSample ? "Example next steps" : "How to apply"} value={s.applicationSteps ? <ul className="list-disc pl-5">{s.applicationSteps.map((x) => <li key={x}>{x}</li>)}</ul> : notVerified} />
          <Row title="Official source" value={s.sourceUrl ? <a className="font-semibold text-primary underline" href={s.sourceUrl} target="_blank" rel="noreferrer">{s.sourceUrl} ↗</a> : <SampleSourceButton />} />
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">KrishiSetu is not a government platform. Final eligibility is decided by the relevant authority.</p>
    </div>
  );
}
