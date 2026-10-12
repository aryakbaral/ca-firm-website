import Link from "next/link";
import { site } from "@/lib/site";
import { Button, Eyebrow } from "@/components/ui";

const phases = [
  { no: "01", name: "Foundation & deployment", status: "LIVE", live: true },
  { no: "02", name: "Design system & site shell", status: "LIVE", live: true },
  { no: "03", name: "Full pages · services · industries", status: "NEXT", live: false },
  { no: "04", name: "Supabase forms & admin dashboard", status: "PLANNED", live: false },
];

export default function Home() {
  return (
    <>
      {/* Statement */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="ledger-grid-light absolute inset-0" />
        <div aria-hidden="true" className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <Eyebrow>
              {site.descriptor} · {site.city}
            </Eyebrow>
            <h1 className="animate-rise mt-6 font-display text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl">
              Clarity in every figure. <em className="italic text-gold-600">Confidence</em> in
              every decision.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              {site.name} delivers audit & assurance, taxation, accounting and advisory services
              to companies, institutions, NGOs, startups and individuals — with independence,
              confidentiality and rigour.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/consultation">Request a Consultation</Button>
              <Button href="/services" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </div>

          <aside
            className="animate-rise self-start border-t-2 border-gold-500 bg-white p-7 shadow-lg shadow-navy-900/5"
            style={{ animationDelay: "150ms" }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
              Reach the firm
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-navy-900/10 pb-3">
                <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Phone</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`} className="font-semibold text-navy-900 hover:text-gold-700">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-navy-900/10 pb-3">
                <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-semibold text-navy-900 hover:text-gold-700">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-navy-900/10 pb-3">
                <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Office</dt>
                <dd className="font-semibold text-navy-900">{site.city}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Hours</dt>
                <dd className="font-semibold text-navy-900">{site.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Build ledger */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Website build ledger</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-navy-900">
              Phase 02 of 13 — site shell live
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Navigation, footer and the light corporate design system are now deployed. Full
              content pages follow in the next phases.
            </p>
          </div>
          <ul>
            {phases.map((p) => (
              <li
                key={p.no}
                className="flex items-baseline justify-between gap-4 border-b border-navy-900/10 py-3"
              >
                <span className="font-mono text-xs text-gold-700">{p.no}</span>
                <span className="flex-1 text-sm font-medium text-ink/80">{p.name}</span>
                <span
                  className={`font-mono text-[10px] tracking-[0.2em] ${
                    p.live ? "text-forest-700" : "text-ink/40"
                  }`}
                >
                  {p.live ? "✓ " : ""}
                  {p.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Practices preview */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl text-navy-900">Six practices</h2>
          <Link
            href="/services"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-700 transition-colors hover:text-gold-600"
          >
            View all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-paper"
            >
              <p className="font-mono text-xs text-gold-700">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-display text-xl text-navy-900 transition-colors group-hover:text-gold-700">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
