import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle, Sprout, X } from "lucide-react";
import { SITE_LANGS, useSiteLang, type SiteLang } from "@/lib/site-i18n";

export function Logo() {
  return (
    <Link to="/" className="flex min-h-11 items-center gap-2.5" aria-label="KrishiSetu home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Sprout className="h-5 w-5" /></span>
      <span className="text-xl font-bold text-foreground">KrishiSetu</span>
    </Link>
  );
}

function LangSelect() {
  const { lang, setLang } = useSiteLang();
  return (
    <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value as SiteLang)}
      className="min-h-11 rounded-xl border bg-card px-3 text-sm font-semibold focus:border-primary focus:outline-none">
      {SITE_LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
    </select>
  );
}

export function SiteHeader() {
  const { s } = useSiteLang();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: s("home") },
    { to: "/schemes", label: s("explore") },
    { to: "/dashboard", label: s("dashboard") },
  ] as const;
  const navLink = "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground";
  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className={navLink} activeProps={{ className: "text-foreground font-semibold" }}>{l.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LangSelect />
          <Link to="/assistant" className="btn-ghost px-4 text-sm"><MessageCircle className="h-4 w-4" />{s("assistant")}</Link>
          <Link to="/find" className="btn-primary px-4 text-sm">{s("getStarted")}</Link>
        </div>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col py-2" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: l.to === "/" }} className={navLink} activeProps={{ className: "text-foreground font-semibold" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="grid gap-2">
            <LangSelect />
            <Link to="/assistant" onClick={() => setOpen(false)} className="btn-ghost"><MessageCircle className="h-4 w-4" />{s("assistant")}</Link>
            <Link to="/find" onClick={() => setOpen(false)} className="btn-primary">{s("getStarted")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}

const OFFICIAL = [
  { name: "myScheme", url: "https://www.myscheme.gov.in" },
  { name: "Dept. of Agriculture & Farmers Welfare", url: "https://agriwelfare.gov.in" },
  { name: "PM-KISAN", url: "https://pmkisan.gov.in" },
  { name: "PMFBY", url: "https://pmfby.gov.in" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">Bridging Farmers to the Right Support. KrishiSetu is an independent prototype, not an official government platform — always confirm details on official government portals.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold">KrishiSetu</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {["About", "Contact", "Privacy", "Terms"].map((x) => (
              <li key={x}><span title="Page coming soon">{x} <span className="text-xs">(coming soon)</span></span></li>
            ))}
            <li><Link to="/resources" className="hover:text-foreground">Farming resources</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Official resources</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {OFFICIAL.map((o) => <li key={o.url}><a href={o.url} target="_blank" rel="noreferrer" className="hover:text-foreground">{o.name} ↗</a></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
