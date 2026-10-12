import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.tagline };
}

export default function ServicePage({ params }) {
  const index = services.findIndex((s) => s.slug === params.slug);
  const service = services[index];
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow>{`Practice ${String(index + 1).padStart(2, "0")} of 06`}</Eyebrow>
              <h1 className="mt-5 font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.2rem]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{service.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`/consultation?service=${service.slug}`}>Request This Service</Button>
                <Button href="/contact" variant="outline">
                  Talk to an Expert
                </Button>
              </div>
            </div>
            <div className="border-t-2 border-gold-500 bg-white p-6 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
                Within this practice
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.includes.map((c) => (
                  <li
                    key={c}
                    className="border border-navy-900/15 bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + why it matters */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal>
            <SectionHeading eyebrow="The service" title="What we do, precisely." />
            <div className="mt-6 space-y-5">
              {service.overview.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full border-l-2 border-gold-500 bg-paper p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-700">
                Why it matters
              </p>
              <p className="mt-4 font-display text-xl leading-snug text-navy-900">{service.why}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who needs it */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <SectionHeading
          eyebrow="Who needs it"
          title="Built for the entities the law — and reality — demand it of."
        />
        <ul className="mt-10 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {service.who.map((w, i) => (
            <li key={w} className="bg-white p-6">
              <p className="font-mono text-xs text-gold-700">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-ink/80">{w}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="border-y border-navy-900/10 bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading
            eyebrow="How we deliver"
            title="Four steps, documented at every hand-off."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full border-t-2 border-gold-500 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + deliverables */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Benefits" title="What changes for you." />
          <ul className="mt-8 space-y-4">
            {service.benefits.map((b) => (
              <li key={b} className="flex gap-4 border-b border-navy-900/10 pb-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-gold-600"
                >
                  <path d="M2 8.5l4 4 8-9" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <p className="text-sm leading-relaxed text-ink/80">{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow="Deliverables" title="What lands on your desk." />
          <ol className="mt-8">
            {service.deliverables.map((d, i) => (
              <li key={d} className="flex items-baseline gap-4 border-b border-navy-900/10 py-4">
                <span className="font-mono text-xs text-gold-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-ink/80">{d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
          <SectionHeading center eyebrow="Questions" title="Frequently asked, plainly answered." />
          <div className="mt-10">
            {service.faqs.map((f) => (
              <details key={f.q} className="group border-b border-navy-900/10 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-navy-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl text-gold-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + other practices */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Eyebrow onDark>Begin this engagement</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                Request {service.title.toLowerCase()} support.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={`/consultation?service=${service.slug}`} variant="gold">
                Request This Service
              </Button>
              <Button href="/contact" variant="light">
                Contact Our Team
              </Button>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
              Other practices
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  {o.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
