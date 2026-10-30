import Link from "next/link";
import { services } from "@/lib/services";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services",
  description:
    "Audit & assurance, taxation, accounting & bookkeeping, business advisory, corporate services and payroll & HR advisory by Baral & K.C. Associates, Chartered Accountants, Lalitpur.",
};

const engagementModels = [
  {
    mono: "Project Engagement",
    title: "One-off engagement · Fixed scope · Fixed fee",
    text: "A defined assignment with an agreed scope, timeline and fee, such as a statutory audit, due diligence or tax health check.",
  },
  {
    mono: "Monthly · Year-round",
    title: "Annual retainer",
    text: "Year-round management of your tax, VAT, payroll and statutory filing obligations, with an agreed allocation of advisory support.",
  },
  {
    mono: "Managed Services",
    title: "Outsourced desk",
    text: "We operate your accounting, payroll or internal audit function on an outsourced basis, with regular reporting to management.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Our services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            <em className="italic text-gold-600">Comprehensive</em> audit, tax and advisory services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            We help organisations meet their regulatory obligations, manage risk and make better decisions. 
            Whatever the engagement, a partner plans it, a second reviewer challenges it, and 
            nothing is delivered until both are satisfied.
          </p>
        </div>
      </section>

      {/* Practices ledger */}
      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="border-b border-navy-900/10 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
              Our services · 06 disciplines
            </p>
          </div>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-4 border-b border-navy-900/10 py-8 transition-colors hover:bg-paper md:grid-cols-[4rem_1fr_auto] md:items-center md:px-4"
              >
                <span className="font-mono text-xs text-gold-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl text-navy-900 transition-colors group-hover:text-gold-700">
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/65">
                    {s.tagline}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {s.includes.map((c) => (
                      <span
                        key={c}
                        className="border border-navy-900/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60"
                      >
                        {c}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-gold-700 md:block">
                  Learn More →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="border-y border-navy-900/10 bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Ways to Work With Us"
            title="Flexible Engagement Models."
            intro="Our engagement models are designed around your needs : from a single defined assignment to a long-term advisory relationship."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <div className="flex h-full flex-col border-t-2 border-gold-500 bg-white p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                    {m.mono}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-navy-900">{m.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <Eyebrow>Not sure where to start?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            Talk to us about your requirements.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Share your situation with us and we will recommend the most appropriate service and next steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/consultation">Request a Consultation</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
