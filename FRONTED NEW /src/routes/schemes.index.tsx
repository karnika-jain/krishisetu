import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, SCHEMES } from "@/lib/schemes";
import { SchemeCard } from "@/components/SchemeCard";

export const Route = createFileRoute("/schemes/")({
  head: () => ({
    meta: [
      { title: "Scheme Directory — KrishiSetu" },
      { name: "description", content: "Search and filter scheme records, clearly marked as official links or sample data." },
      { property: "og:title", content: "Scheme Directory — KrishiSetu" },
      { property: "og:description", content: "Browse government programme links and sample records by category." },
    ],
  }),
  component: Directory,
});

function Directory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [type, setType] = useState<"all" | "official" | "sample">("all");
  const list = useMemo(() => SCHEMES.filter((s) =>
    (!cat || s.category === cat) &&
    (type === "all" || (type === "sample") === s.isSample) &&
    (!q || `${s.name} ${s.description}`.toLowerCase().includes(q.toLowerCase())),
  ), [q, cat, type]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl">Scheme directory</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Records marked <span className="chip-official">Official source link</span> point to real government portals.
        Records marked <span className="chip-sample">Sample data</span> are fictional and only for demonstration.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <input className="field" placeholder="Search schemes…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search schemes" />
        <select className="field" value={cat} onChange={(e) => setCat(e.target.value)} aria-label="Category">
          <option value="">All categories</option>
          {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        <select className="field" value={type} onChange={(e) => setType(e.target.value as typeof type)} aria-label="Record type">
          <option value="all">All records</option>
          <option value="official">Official links only</option>
          <option value="sample">Sample data only</option>
        </select>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{list.length} record{list.length === 1 ? "" : "s"}</p>
      {list.length === 0 ? (
        <div className="card mt-4 text-center">
          <p>No records match your search.</p>
          <button className="btn-ghost mt-3" onClick={() => { setQ(""); setCat(""); setType("all"); }}>Clear filters</button>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map((s) => <SchemeCard key={s.id} scheme={s} />)}</div>
      )}
      <p className="mt-8 text-sm">Want to see the matching in action? <Link to="/demo" className="font-semibold text-primary underline">View demo results</Link></p>
    </div>
  );
}
