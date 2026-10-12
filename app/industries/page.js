import { industries } from "@/lib/industries";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Industries",
  description:
    "Sector-specific audit, tax and advisory experience across banking, insurance, manufacturing, NGOs, public sector, hydropower and ten more industries in Nepal.",
};

function Label({ children, className = "" }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 ${className}`}>
      {children}
    </p>
  );
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Sector experience</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            Fourteen industries, <em className="italic text-gold-600">one disciplined</em> method.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Regulatory environments differ; our method does not. Before fieldwork begins we map
            the statutes, directives and reporting packs your sector lives by — so nothing
            material is a surprise.
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
            Select a sector below to open its dossier
          </p>
        </div>
      </section>

      {/* Dossiers */}
      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={Math.min(i, 6) * 40}>
              <details className="group border-b border-navy-900/10" open={i === 0}>
                <summary className="grid cursor-pointer list-none grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 transition-colors hover:bg-paper md:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-xs text-gold-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-navy-900 transition-colors group-open:text-gold-700">
                      {ind.name}
                    </span>
                    <span className="mt-1 block text-sm text-ink/60">{ind.line}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl text-gold-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="grid gap-10 bg-paper px-4 pb-10 pt-2 md:grid-cols-2 lg:pl-16">
                  <div>
                    <Label>Common challenges</Label>
                    <ul className="mt-3 space-y-2">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-gold-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Label className="mt-6">Regulatory environment</Label>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{ind.regulatory}</p>
                  </div>
                  <div>
                    <Label>Audit & tax considerations</Label>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{ind.considerations}</p>
                    <Label className="mt-6">How we support you</Label>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{ind.support}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing band */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <Eyebrow onDark>Beyond the list</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
            Don&apos;t see your industry? The method still applies.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Cooperatives, media houses, airlines, monasteries — the discipline transfers: map the
            law, test the numbers, report in plain language.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/consultation" variant="gold">
              Request a Consultation
            </Button>
            <Button href="/contact" variant="light">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
