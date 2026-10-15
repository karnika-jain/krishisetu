import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, ListChecks, MessageCircle, Search, ShieldCheck, Tractor } from "lucide-react";
import heroImg from "@/assets/hero-farmer.jpg";
import fieldImg from "@/assets/field.jpg";
import { useSiteLang } from "@/lib/site-i18n";
import { SCHEMES } from "@/lib/schemes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KrishiSetu — Bridging Farmers to the Right Support" },
      { name: "description", content: "Discover government schemes that may fit your farm, with eligibility guidance, documents and official links — in English, Hindi or Kannada." },
      { property: "og:title", content: "KrishiSetu — Bridging Farmers to the Right Support" },
      { property: "og:description", content: "Find potentially relevant agricultural schemes and ask the KrishiSetu AI Assistant." },
    ],
  }),
  component: Home,
});

const FEATURED = [
  { id: "pm-kisan", tag: "Income support", short: "PM-KISAN", full: "Pradhan Mantri Kisan Samman Nidhi" },
  { id: "pmfby", tag: "Insurance", short: "PMFBY", full: "Pradhan Mantri Fasal Bima Yojana" },
  { id: "kcc", tag: "Credit", short: "Kisan Credit Card", full: "KCC Scheme" },
] as const;

function Home() {
  const { s } = useSiteLang();
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:pt-16">
        <div>
          <p className="inline-flex rounded-full border bg-card px-3 py-1 text-sm font-medium text-primary">{s("tagline")}</p>
          <h1 className="mt-5 text-[32px] leading-[1.15] md:text-[48px]">{s("heroTitle")}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{s("heroText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/find" className="btn-primary">{s("findSchemes")} <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/schemes" className="btn-ghost">{s("explore")}</Link>
          </div>
        </div>
        <div className="relative pb-10">
          <img src={heroImg} alt="Farmer checking his phone in a wheat field" width={1024} height={1152} className="aspect-[5/5.2] w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-0 left-4 right-4 rounded-2xl border bg-card p-4 shadow-lg sm:left-auto sm:right-6 sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s("sampleCard")} · Potential match</p>
            <p className="mt-1 text-lg font-bold">PMFBY · Crop Insurance</p>
            <p className="mt-1 text-sm text-muted-foreground">Example of how a result looks — not an assessment.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-[32px] md:text-[36px]">{s("howTitle")}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { Icon: Tractor, t: s("how1t"), d: s("how1d") },
            { Icon: Search, t: s("how2t"), d: s("how2d") },
            { Icon: FileText, t: s("how3t"), d: s("how3d") },
          ].map(({ Icon, t, d }, i) => (
            <div key={i} className="card p-7">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold text-muted-foreground/50">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-soft py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[32px] md:text-[36px]">{s("featuredTitle")}</h2>
              <p className="mt-2 text-muted-foreground">{s("featuredText")}</p>
            </div>
            <Link to="/schemes" className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary">{s("viewAll")} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {FEATURED.map((f) => {
              const sc = SCHEMES.find((x) => x.id === f.id);
              if (!sc) return null;
              return (
                <div key={f.id} className="card flex flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{f.tag}</span>
                    <Link to="/schemes/$id" params={{ id: f.id }} aria-label={`${f.short} details`} className="grid h-11 w-11 place-items-center rounded-lg hover:bg-muted"><ArrowUpRight className="h-5 w-5" /></Link>
                  </div>
                  <h3 className="mt-5 text-xl">{f.short}</h3>
                  <p className="text-sm text-muted-foreground">{f.full}</p>
                  <p className="mt-4 text-[15px]">{sc.description}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{s("eligibilityNote")}</p>
                  {sc.sourceUrl && <a href={sc.sourceUrl} target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-1 pt-4 text-sm font-semibold text-primary">{sc.sourceUrl.replace("https://", "")} <ArrowUpRight className="h-4 w-4" /></a>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Everything */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img src={fieldImg} alt="Rows of young crops beside an irrigation canal" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        <div>
          <h2 className="text-[32px] leading-tight md:text-[36px]">{s("everythingTitle")}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { Icon: Search, t: s("f1t"), d: s("f1d") },
              { Icon: ShieldCheck, t: s("f2t"), d: s("f2d") },
              { Icon: ListChecks, t: s("f3t"), d: s("f3d") },
              { Icon: ClipboardCheck, t: s("f4t"), d: s("f4d") },
            ].map(({ Icon, t, d }) => (
              <div key={t}>
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistant */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 rounded-3xl bg-forest p-8 text-forest-foreground md:grid-cols-2 md:p-12">
          <div>
            <p className="font-semibold text-accent">{s("aiLabel")}</p>
            <h2 className="mt-3 text-[32px] leading-tight md:text-[36px]">{s("aiTitle")}</h2>
            <p className="mt-4 text-lg opacity-80">{s("aiText")}</p>
            <Link to="/assistant" className="btn-accent mt-8"><MessageCircle className="h-4 w-4" />{s("openAssistant")}</Link>
          </div>
          <div className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-5" aria-label="Sample chat preview">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide opacity-60">{s("sampleCard")}</p>
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl bg-accent px-4 py-2.5 text-sm text-accent-foreground">{s("sampleQ")}</p>
            <p className="mt-4 max-w-[95%] text-[15px] leading-relaxed">{s("sampleA")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
