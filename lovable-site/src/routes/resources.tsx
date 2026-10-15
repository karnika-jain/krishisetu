import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Farming Resources — KrishiSetu" },
      { name: "description", content: "General farming guidance on water, soil, insurance, pests and markets, with official government portal links." },
      { property: "og:title", content: "Farming Resources — KrishiSetu" },
      { property: "og:description", content: "Helpful farming guidance and official government portals." },
    ],
  }),
  component: Resources,
});

const OFFICIAL = [
  { name: "myScheme — national scheme search", url: "https://www.myscheme.gov.in" },
  { name: "Ministry of Agriculture & Farmers Welfare", url: "https://agriwelfare.gov.in" },
  { name: "PM-KISAN", url: "https://pmkisan.gov.in" },
  { name: "PM Fasal Bima Yojana (crop insurance)", url: "https://pmfby.gov.in" },
  { name: "Soil Health Card", url: "https://soilhealth.dac.gov.in" },
  { name: "PM Krishi Sinchayee Yojana (irrigation)", url: "https://pmksy.gov.in" },
  { name: "e-NAM (online mandi trading)", url: "https://enam.gov.in" },
];

const GUIDES = [
  { icon: "💧", t: "Irrigation & water", tips: ["Drip and sprinkler systems can reduce water use compared to flood irrigation.", "Water early morning or evening to reduce evaporation.", "Mulching helps keep soil moisture."] },
  { icon: "🟫", t: "Soil health", tips: ["Test your soil before deciding fertilizer amounts.", "Add compost or farmyard manure to improve soil structure.", "Rotate crops, including pulses, to support soil fertility."] },
  { icon: "☂", t: "Crop insurance", tips: ["Ask your bank, agriculture office or official portal which crops are notified in your area.", "Note the enrolment deadline for each season — it varies.", "Report crop loss quickly through official channels."] },
  { icon: "🐛", t: "Crop care & pests", tips: ["Inspect fields regularly and act early.", "Use pesticides only as advised by an agriculture officer and the label.", "Remove and destroy badly infected plants to limit spread."] },
  { icon: "🏪", t: "Market access", tips: ["Compare prices across nearby mandis before selling.", "Grading and clean packing can help get better prices.", "Farmer Producer Organisations (FPOs) can help with collective selling."] },
  { icon: "🌱", t: "Best practices", tips: ["Use quality seed from trusted sources.", "Keep simple records of costs, inputs and yields.", "Visit your nearest Krishi Vigyan Kendra (KVK) for local advice."] },
];

function Resources() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl">Farming resources</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Two kinds of help: official government portals, and general tips. The tips are educational guidance only — they are not official government instructions.</p>

      <h2 className="mt-10 text-2xl">Government support & scheme information</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {OFFICIAL.map((o) => (
          <a key={o.url} href={o.url} target="_blank" rel="noreferrer" className="card flex items-center justify-between gap-3 hover:border-primary">
            <span><span className="chip-official">Official portal</span><span className="mt-2 block font-semibold">{o.name}</span><span className="text-xs text-muted-foreground">{o.url.replace("https://", "")}</span></span>
            <span aria-hidden>↗</span>
          </a>
        ))}
      </div>

      <h2 className="mt-12 text-2xl">General farming guidance</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <div key={g.t} className="card">
            <span className="chip bg-muted text-muted-foreground">General guidance</span>
            <h3 className="mt-3 text-xl">{g.icon} {g.t}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{g.tips.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
