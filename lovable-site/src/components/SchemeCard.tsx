import { Link } from "@tanstack/react-router";
import { categoryLabel, type Scheme } from "@/lib/schemes";

export function StatusChip({ scheme }: { scheme: Scheme }) {
  return scheme.isSample ? (
    <span className="chip-sample">Sample data · not real</span>
  ) : (
    <span className="chip-official">Official source link</span>
  );
}

export function regionText(s: Scheme) {
  return s.states.includes("ALL") ? "All India (as listed)" : s.states.join(", ");
}

export function SchemeCard({ scheme }: { scheme: Scheme }) {
  return (
    <Link
      to="/schemes/$id"
      params={{ id: scheme.id }}
      className="card flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
    >
      <div className="flex flex-wrap gap-2"><StatusChip scheme={scheme} /></div>
      <h3 className="text-xl">{scheme.name}</h3>
      <p className="text-sm text-muted-foreground">{scheme.description}</p>
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground">
        <span>📂 {categoryLabel(scheme.category)}</span>
        <span>📍 {regionText(scheme)}</span>
      </div>
    </Link>
  );
}
