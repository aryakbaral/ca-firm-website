import Link from "next/link";
import { site } from "@/lib/site";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Skyline from "@/components/Skyline";

const stats = [
  { value: 15, suffix: "+", label: "Years of practice" },
  { value: 300, suffix: "+", label: "Clients served" },
  { value: 12, suffix: "", label: "Professionals" },
  { value: 14, suffix: "", label: "Industries served" },
  { value: 900, suffix: "+", label: "Engagements completed" },
];

const serviceChips = {
  "audit-assurance": ["Statutory audit", "Internal audit", "Forensic audit"],
  taxation: ["Corporate tax", "VAT / GST", "Tax representation"],
  "accounting-bookkeeping": ["Bookkeeping", "Management accounts", "IFRS / NFRS reporting"],
  "business-advisory": ["Feasibility studies", "Financial modelling", "Due diligence"],
  "corporate-services": ["Company secretarial", "Annual returns", "Governance advisory"],
  "payroll-hr": ["Payroll processing", "Statutory deductions", "HR policy"],
};

const industries = [
  "Banking & financial services",
  "Insurance",
  "Manufacturing",
  "Retail & distribution",
  "Real estate & construction",
  "Healthcare",
  "Education",
  "NGOs & donor-funded organisations",
  "Public sector",
  "Technology & startups",
  "Hospitality",
  "Logistics & transport",
  "Professional services",
  "Energy & hydropower",
];

const promises = [
  { title: "Independence", text: "Objective opinions, free of conflicts — always." },
  { title: "Confidentiality", text: "Engagement data stays within our controlled systems." },
  { title: "Rigour", text: "Every conclusion documented, reviewed and standards-based." },
  { title: "Responsiveness", text: "A partner replies within one business day." },
];

const credentials = [
  { label: "Regulated by", value: "ICAN" },
  { label: "Standards", value: "NSA · NFRS / IFRS" },
  { label: "Response", value: "One business day" },
];

const principles = ["Partner-signed reports", "Documented working papers", "Two-level review, minimum"];

const whyUs = [
  {
    no: "01",
    title: "Partner-led engagements",
    text: "A Chartered Accountant partner signs and stays accountable for your file from planning to final report — no silent hand-offs to juniors.",
  },
  {
    no: "02",
    title: "Evidence, not opinion",
    text: "Our working papers, checklists and review notes follow Nepal Standards on Auditing and NFRS/IFRS practice, so every figure we stand behind can be traced.",
  },
  {
    no: "03",
    title: "Deadlines treated as commitments",
    text: "A statutory calendar is mapped per client at onboarding; filings are tracked, reminded and completed ahead of due dates.",
  },
  {
    no: "04",
    title: "Advice you can act on",
    text: "We write in plain language with costs, risks and options quantified — memos your board can decide from, not academic essays.",
  },
];

const testimonials = [
  {
    quote:
      "They rebuilt three years of books and walked our board through the audit without a single surprise. The clearest firm we have worked with.",
    who: "Finance Manager",
    where: "Manufacturing group, Lalitpur",
  },
  {
    quote:
      "Our donor audits used to take months of back-and-forth. Their compliance calendar and file discipline cut it to weeks.",
    who: "Executive Director",
    where: "Donor-funded NGO",
  },
  {
    quote:
      "Practical tax advice with the sections cited and the numbers shown. They treat our deadlines as their own.",
    who: "Founder",
    where: "Technology startup, Kathmandu",
  },
];

const posts = [
  {
    category: "Tax Alert",
    date: "6 Oct 2026",
    title: "Finance Act updates: what changes for companies and taxpayers this year",
    excerpt:
      "A partner's summary of the rates, thresholds and compliance changes that matter most to Nepali businesses.",
  },
  {
    category: "Audit Update",
    date: "22 Sep 2026",
    title: "Auditing under NFRS: the adjustments we saw most this season",
    excerpt:
      "Field observations from recent statutory audits, and how to prepare your file before we arrive.",
  },
  {
    category: "Compliance Calendar",
    date: "30 Sep 2026",
    title: "Quarterly VAT and TDS filing deadlines — what to prepare now",
    excerpt:
      "The documents, reconciliations and approvals to line up before the next statutory due date.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex flex-col overflow-hidden bg-paper lg:min-h-[calc(100svh-7rem)]">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[46rem] w-[46rem]" />
        <div className="relative mx-auto grid w-full max-w-7xl flex-1 content-center gap-12 px-6 pb-12 pt-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16 lg:pt-16">
          <div>
            <Eyebrow>
              {site.descriptor} · {site.city}
            </Eyebrow>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
              <em className="italic text-gold-600">Trusted</em> audit, tax and advisory services.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Chartered Accountants in Lalitpur serving businesses and institutions — assurance,
              compliance and growth-oriented counsel, delivered with independence and complete
              confidentiality.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/consultation">Request a Consultation</Button>
              <Button href="/services" variant="outline">
                Explore Our Services
              </Button>
              <Link
                href="/contact"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy-900 underline decoration-gold-500 underline-offset-8 transition-colors hover:text-gold-700"
              >
                Contact our team →
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-navy-900/10 pt-6">
              {credentials.map((c) => (
                <div key={c.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    {c.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-navy-900">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="flex h-full flex-col border-t-2 border-gold-500 bg-white p-6 shadow-lg shadow-navy-900/5 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
              The firm&apos;s promise
            </p>
            <ul className="mt-3 flex-1 divide-y divide-navy-900/10">
              {promises.map((p) => (
                <li key={p.title} className="flex gap-4 py-3">
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
                  <div>
                    <p className="font-semibold text-navy-900">{p.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/65">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-navy-900/10 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                Partner line
              </span>
              <a
                href={`tel:${site.phoneHref}`}
                className="font-display text-lg text-navy-900 transition-colors hover:text-gold-700"
              >
                {site.phone}
              </a>
            </div>
          </aside>
        </div>

        {/* Trust strip pinned to the fold */}
        <div className="relative border-t border-navy-900/10 bg-white/70">
          <p className="mx-auto max-w-7xl px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 sm:px-10">
            Companies · Banks & insurers · NGOs · Cooperatives · Startups · Public institutions
          </p>
        </div>
      </section>

      {/* ============ FIRM INTRO ============ */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="The firm"
              title="A practice built on independence and evidence."
              intro="Founded in Lalitpur, Baral & K.C. Associates serves owners, boards and finance teams who need their numbers to withstand scrutiny — from the Inland Revenue Department to donors, lenders and regulators."
            />
            <div className="mt-8">
              <Button href="/about" variant="outline">
                About the firm
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="border-l-2 border-gold-500 bg-paper p-8 sm:p-10">
              <blockquote className="font-display text-2xl leading-snug text-navy-900 sm:text-[1.7rem]">
                “An audit is not a ritual. It is the reason your stakeholders can act without
                doubt.”
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/55">
                Engagement philosophy · {site.name}
              </figcaption>
            </figure>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {principles.map((p) => (
                <li
                  key={p}
                  className="border border-navy-900/10 bg-paper px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        <Skyline className="text-gold-400/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <p className="font-display text-4xl text-gold-400 sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES LEDGER ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What we do" title="Six practices, one standard of care." />
          <Button href="/services" variant="outline">
            All services
          </Button>
        </div>
        <div className="mt-12 border-t border-navy-900/10">
          {site.services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-4 border-b border-navy-900/10 py-7 transition-colors hover:bg-white md:grid-cols-[4rem_1fr_auto] md:items-center md:px-4"
              >
                <span className="font-mono text-xs text-gold-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl text-navy-900 transition-colors group-hover:text-gold-700">
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/65">
                    {s.blurb}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {serviceChips[s.slug].map((c) => (
                      <span
                        key={c}
                        className="border border-navy-900/15 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60"
                      >
                        {c}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-gold-700 md:block">
                  View practice →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="border-y border-navy-900/10 bg-mist">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Sector experience"
              title="Fourteen industries, one disciplined method."
              intro="Regulatory environments differ; our method does not. We map the statutes, standards and reporting packs your sector lives by before fieldwork begins."
            />
            <div className="mt-8">
              <Button href="/industries" variant="outline">
                Industries we serve
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {industries.map((name, i) => (
                <li key={name} className="flex items-baseline gap-3 border-b border-navy-900/10 py-3">
                  <span className="font-mono text-[10px] text-gold-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-ink/80">{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Why firms choose us"
          title="The difference is in the discipline."
        />
        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.no} delay={i * 80} className="bg-white">
              <div className="h-full p-8 sm:p-10">
                <p className="font-display text-4xl text-gold-500/80">{w.no}</p>
                <h3 className="mt-4 font-display text-xl text-navy-900">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="border-y border-navy-900/10 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Client words"
            title="Confidence, in their words."
            intro="Names withheld under our confidentiality policy; role and sector shown with permission."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.who} delay={i * 100} className={i === 1 ? "lg:mt-10" : ""}>
                <figure className="flex h-full flex-col border border-navy-900/10 bg-white p-8">
                  <span aria-hidden="true" className="font-display text-5xl leading-none text-gold-500">
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-900/10 pt-4">
                    <p className="font-semibold text-navy-900">{t.who}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                      {t.where}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSIGHTS PREVIEW ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Knowledge hub" title="Updates worth your attention." />
          <Button href="/insights" variant="outline">
            All insights
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Link
                href="/insights"
                className="group flex h-full flex-col border-t-2 border-gold-500 bg-paper p-7 transition-colors hover:bg-white"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                  {p.category} · {p.date}
                </p>
                <h3 className="mt-4 font-display text-xl leading-snug text-navy-900 transition-colors group-hover:text-gold-700">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{p.excerpt}</p>
                <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 transition-colors group-hover:text-gold-700">
                  Read note →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CONTACT / CTA BAND ============ */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        <Skyline className="text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Eyebrow onDark>Begin the conversation</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                Speak to a partner — not a call centre.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Tell us what you need assured, filed, fixed or planned. We respond within one
                business day, in confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/consultation" variant="gold">
                  Request a Consultation
                </Button>
                <Button href="/contact" variant="light">
                  Contact Our Team
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-white/10 lg:pl-10">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                    Visit
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                    Call
                  </dt>
                  <dd className="mt-1 text-sm">
                    <a href={`tel:${site.phoneHref}`} className="text-white/80 transition-colors hover:text-gold-300">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                    Write
                  </dt>
                  <dd className="mt-1 text-sm">
                    <a href={`mailto:${site.email}`} className="text-white/80 transition-colors hover:text-gold-300">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
