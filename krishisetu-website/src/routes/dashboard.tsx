
import { createFileRoute, Link } from "@tanstack/react-router";
import { useFinder } from "@/lib/finder-context";
import { matchSchemes } from "@/lib/matching";
import { SCHEMES, categoryLabel } from "@/lib/schemes";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Daily Farmer Dashboard — KrishiSetu" },
      {
        name: "description",
        content: "Your personalized daily farming updates, scheme matches and reminders.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { state, hydrated } = useFinder();
  const p = state.profile;
  const ready = state.submitted && p.state && p.crop;

  const matches = ready
    ? matchSchemes(p, SCHEMES).filter((m) => !m.scheme.isSample)
    : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-primary">
            KRISHISETU DAILY UPDATE
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Your Farming Dashboard 🌱
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your daily farming information, reminders and scheme updates in one place.
          </p>
        </div>
        <Link to="/find" className="btn-ghost">
          Update farm details →
        </Link>
      </div>

      {!hydrated ? (
        <p className="mt-8 text-muted-foreground">Loading your farm details…</p>
      ) : !ready ? (
        <div className="card mt-8 text-center">
          <h2 className="text-xl font-semibold">Let's set up your farm profile</h2>
          <p className="mt-2 text-muted-foreground">
            Add your location and main crop to personalize your daily dashboard.
          </p>
          <Link to="/find" className="btn-primary mt-5 inline-flex">
            Set up my farm
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <p className="text-sm text-muted-foreground">Your location</p>
              <h2 className="mt-2 text-lg font-bold">{p.district || p.state}</h2>
              <p className="text-sm text-muted-foreground">{p.state}</p>
            </div>
            <div className="card">
              <p className="text-sm text-muted-foreground">Main crop</p>
              <h2 className="mt-2 text-lg font-bold">{p.crop}</h2>
              <p className="text-sm text-muted-foreground">Your selected crop</p>
            </div>
            <div className="card">
              <p className="text-sm text-muted-foreground">Land area</p>
              <h2 className="mt-2 text-lg font-bold">
                {p.landAcres ? `${p.landAcres} acres` : "Not provided"}
              </h2>
              <p className="text-sm text-muted-foreground">Farm profile</p>
            </div>
            <div className="card">
              <p className="text-sm text-muted-foreground">Potential scheme matches</p>
              <h2 className="mt-2 text-3xl font-bold text-primary">
                {matches.length}
              </h2>
              <p className="text-sm text-muted-foreground">
                Based on your current details
              </p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Your daily farming updates</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Important information for your location and crop.
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <article className="card">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌦️</span>
                  <div>
                    <h3 className="text-lg font-bold">Weather alerts</h3>
                    <p className="text-sm text-muted-foreground">
                      Weather for {p.district || p.state}
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-secondary/50 p-4">
                  <p className="font-semibold">Weather service not connected yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Live forecasts and crop-specific rain, heat and storm alerts
                    will appear here once the weather service is connected.
                  </p>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Crop: {p.crop}
                </p>
              </article>

              <article className="card">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📈</span>
                  <div>
                    <h3 className="text-lg font-bold">Latest mandi prices</h3>
                    <p className="text-sm text-muted-foreground">
                      Market prices for {p.crop}
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-secondary/50 p-4">
                  <p className="font-semibold">Market data not connected yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Verified mandi prices, market names, varieties and update
                    dates will appear here when the market data source is connected.
                  </p>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  We will not display estimated prices as live market prices.
                </p>
              </article>

              <article className="card">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📄</span>
                  <div>
                    <h3 className="text-lg font-bold">Missing documents</h3>
                    <p className="text-sm text-muted-foreground">
                      Document checklist for your schemes
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-secondary/50 p-4">
                  <p className="font-semibold">Document tracking needs setup</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Once scheme-specific document requirements and your
                    submitted documents are recorded, missing items will be
                    listed here.
                  </p>
                </div>
                <Link to="/schemes" className="mt-4 inline-block text-sm font-semibold text-primary">
                  Explore government schemes →
                </Link>
              </article>

              <article className="card">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📅</span>
                  <div>
                    <h3 className="text-lg font-bold">Approaching deadlines</h3>
                    <p className="text-sm text-muted-foreground">
                      Important application dates
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-secondary/50 p-4">
                  <p className="font-semibold">Deadline tracking needs setup</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Verified application deadlines and official announcements
                    will appear here when date information is available.
                  </p>
                </div>
                <Link to="/schemes" className="mt-4 inline-block text-sm font-semibold text-primary">
                  View available schemes →
                </Link>
              </article>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">Your farm details</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Information used to personalize your dashboard.
                </p>
              </div>
              <Link to="/find" className="btn-ghost">
                Edit details
              </Link>
            </div>

            <div className="card mt-4">
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["State", p.state],
                  ["District", p.district || "Not provided"],
                  ["Main crop", p.crop],
                  ["Land", p.landAcres ? `${p.landAcres} acres` : "Not provided"],
                  [
                    "Support needed",
                    p.category ? categoryLabel(p.category) : p.problem || "Not provided",
                  ],
                ].map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm text-muted-foreground">{key}</dt>
                    <dd className="mt-1 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">Potential scheme matches</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  These are potential matches, not official eligibility decisions.
                </p>
              </div>
              <Link to="/results" className="text-sm font-semibold text-primary">
                Full results →
              </Link>
            </div>

            <div className="card mt-4">
              <ul className="divide-y">
                {matches.map((m) => (
                  <li
                    key={m.scheme.id}
                    className="flex flex-wrap items-center justify-between gap-2 py-4"
                  >
                    <Link
                      to="/schemes/$id"
                      params={{ id: m.scheme.id }}
                      className="font-semibold hover:text-primary"
                    >
                      {m.scheme.name}
                    </Link>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {m.status}
                    </span>
                  </li>
                ))}
                {matches.length === 0 && (
                  <li className="py-4 text-muted-foreground">
                    No matching scheme records found for your current details.
                  </li>
                )}
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
