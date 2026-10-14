import { site } from "@/lib/site";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";


export const metadata = {
  title: "About Us",
  description:
    "The history, mission, values, leadership and ethical commitments of Baral & K.C. Associates, Chartered Accountants, Lalitpur, Nepal.",
};

/* ------------------------------------------------------------------
   TODO (edit freely, no code knowledge needed):
   Replace placeholder years, milestones, leadership roles and
   memberships below with the firm's real facts when available.
------------------------------------------------------------------- */

const facts = [
  { label: "Established", value: "2009" },
  { label: "Head office", value: "Lalitpur" },
  { label: "Practice areas", value: "Six" },
  { label: "Professionals", value: "12" },
];

const mission =
  "To protect confidence in financial information — delivering audit, tax and advisory work of verifiable quality, on time, in plain language and at a fair fee.";

const vision =
  "To be Nepal's most trusted independent practice: the firm boards, donors and entrepreneurs call first when the numbers must be right.";

const values = [
  {
    no: "01",
    title: "Integrity",
    text: "We say what we found, not what is convenient. Our reports carry no favours and no omissions.",
  },
  {
    no: "02",
    title: "Independence",
    text: "No conflicts, no self-review, no pressure. Where independence cannot be held, we decline the engagement.",
  },
  {
    no: "03",
    title: "Confidentiality",
    text: "Client information is accessed only by the engagement team and released only with partner approval or legal obligation.",
  },
  {
    no: "04",
    title: "Competence",
    text: "Every professional maintains continuing development hours; every opinion rests on current standards and cited evidence.",
  },
  {
    no: "05",
    title: "Accountability",
    text: "The partner who signs your report answers your calls. Responsibility is never delegated away.",
  },
  {
    no: "06",
    title: "Client service",
    text: "Deadlines are commitments, jargon is avoided, and advice arrives with costs and options quantified.",
  },
];

const story = [
  "The firm began with a simple observation: most financial statements in Nepal are prepared to satisfy a filing, not to support a decision. We set out to change that for every client we serve — by making the work verifiable, the language plain and the deadlines non-negotiable.",
  "Years later the practice spans six disciplines and fourteen industries, but the method is unchanged: a partner plans the work, a second reviewer challenges it, and nothing is signed until both are satisfied.",
  "We remain deliberately mid-sized. Large enough to field specialist teams for donor audits and group consolidations; small enough that the partner who signs your report knows your ledger by name.",
];

const milestones = [
  {
    year: "2009",
    title: "The firm is founded",
    text: "Two Chartered Accountants open a practice in Lalitpur with three clients and one principle: sign only what you can stand behind.",
  },
  {
    year: "2012",
    title: "First donor-funded audits",
    text: "Appointed auditor to international NGO programmes; the grant-compliance and donor-reporting desk is established.",
  },
  {
    year: "2015",
    title: "Tax practice expands",
    text: "A dedicated team for IRD representation, VAT/GST advisory and corporate tax planning is formed.",
  },
  {
    year: "2018",
    title: "Advisory & internal audit",
    text: "Risk advisory, internal control reviews and transaction due diligence become a standing practice area.",
  },
  {
    year: "2021",
    title: "Digital bookkeeping desk",
    text: "Cloud accounting, payroll and monthly-close services launched for SMEs, cooperatives and startups.",
  },
  {
    year: "2024",
    title: "A twelve-person practice",
    text: "Article clerks, managers and partners under one roof; two-level technical review is formalised firm-wide.",
  },
  {
    year: "2026",
    title: "Today",
    text: "Serving companies, cooperatives, NGOs, financial institutions and public bodies across fourteen industries.",
  },
];

const leadership = [
  {
    no: "01",
    name: "", // TODO: real name, e.g. "Mr. Ram Baral"
    role: "Managing Partner & Co-Founder",
    qualification: "Chartered Accountant (ICAN)",
    focus:
      "Audit & assurance, corporate governance and partner review of every opinion the firm signs.",
  },
  {
    no: "02",
    name: "", // TODO: real name
    role: "Partner & Co-Founder",
    qualification: "Chartered Accountant (ICAN)",
    focus:
      "Taxation, IRD representation and VAT/GST advisory; leads the tax technical desk.",
  },
  {
    no: "03",
    name: "", // TODO: real name
    role: "Senior Manager — Accounting Services",
    qualification: "CA (ICAN) · ACCA affiliate",
    focus:
      "Runs the bookkeeping, payroll and monthly-close desk for SMEs, cooperatives and startups.",
  },
  {
    no: "04",
    name: "", // TODO: real name
    role: "Manager — Advisory",
    qualification: "CA (ICAN)",
    focus:
      "Financial modelling, feasibility studies, internal control reviews and due diligence engagements.",
  },
];

const ethics = [
  {
    title: "Independence",
    text: "We accept no engagement where a conflict, financial interest or relationship could colour our opinion. Where independence cannot be maintained, we decline — in writing, with reasons.",
  },
  {
    title: "Confidentiality",
    text: "Client information is held under engagement-level access control. Files, working papers and correspondence leave this office only with partner approval, or where the law compels it.",
  },
  {
    title: "Professional ethics",
    text: "Our work follows the ICAN Code of Ethics, Nepal Standards on Auditing and applicable NFRS/IFRS. Every professional signs an annual independence declaration and completes CPD hours.",
  },
];

const memberships = [
  "Institute of Chartered Accountants of Nepal (ICAN) — member firm",
  "IRD-registered tax practitioners",
  "Nepal Standards on Auditing (NSA) practice",
  "NFRS / IFRS reporting competence",
  "Quarterly continuing professional development (CPD)",
];

const approach = [
  {
    step: "Step 1",
    title: "Understand",
    text: "A partner interviews your finance lead, reads last year's file and maps your statutory calendar before we quote a fee.",
  },
  {
    step: "Step 2",
    title: "Plan",
    text: "Scope, timing, team and materiality are set in writing; you receive an engagement letter and a fieldwork calendar.",
  },
  {
    step: "Step 3",
    title: "Execute & review",
    text: "Fieldwork runs on NSA checklists; a second reviewer challenges every judgement before anything reaches your desk.",
  },
  {
    step: "Step 4",
    title: "Report & advise",
    text: "Findings arrive as a ranked management letter plus a plain-language board summary — and we stay for the fixes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ PAGE HERO + FACTS ============ */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[46rem] w-[46rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>About the firm</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.4rem]">
            Independence, competence and <em className="italic text-gold-600">quiet rigour</em> —
            since day one.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            {site.name} is a Lalitpur practice of Chartered Accountants serving companies,
            cooperatives, NGOs, financial institutions and public bodies. This page sets out who
            we are, how we work and the commitments we do not negotiate.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-paper px-6 py-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  {f.label}
                </dt>
                <dd className="mt-1 font-display text-2xl text-navy-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <div className="h-full border-t-2 border-gold-500 bg-paper p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-700">
                01 · Mission
              </p>
              <p className="mt-5 font-display text-2xl leading-snug text-navy-900 sm:text-[1.7rem]">
                {mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full border-t-2 border-gold-500 bg-navy-900 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">
                02 · Vision
              </p>
              <p className="mt-5 font-display text-2xl leading-snug text-white sm:text-[1.7rem]">
                {vision}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Core values"
          title="Six commitments behind every signature."
          intro="These are not wall posters. Each value maps to a rule in our engagement manual that a reviewer can check."
        />
        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.no} delay={i * 70} className="bg-white">
              <div className="h-full p-8">
                <p className="font-mono text-xs text-gold-700">{v.no}</p>
                <h3 className="mt-3 font-display text-xl text-navy-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ STORY + TIMELINE ============ */}
      <section className="border-y border-navy-900/10 bg-mist">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionHeading eyebrow="Our story" title="Years of standing behind the numbers." />
              <div className="mt-6 space-y-5">
                {story.map((p) => (
                  <p key={p.slice(0, 24)} className="leading-relaxed text-ink/75">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ol className="relative space-y-10 border-l border-navy-900/15 pl-8">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-mist"
                  />
                  <p className="font-mono text-xs tracking-[0.2em] text-gold-700">{m.year}</p>
                  <h3 className="mt-1 font-display text-xl text-navy-900">{m.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{m.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="The people who sign the work."
          intro="Partner and manager profiles with photographs will be published shortly; responsibilities are shown as they stand today."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {leadership.map((p, i) => (
            <Reveal key={p.no} delay={i * 90}>
              <div className="flex h-full flex-col border border-navy-900/10 border-t-2 border-t-gold-500 bg-white p-7">
                <p className="font-mono text-xs text-gold-700">{p.no}</p>
                {p.name && <p className="mt-3 font-semibold text-navy-900">{p.name}</p>}
                <h3 className="mt-3 font-display text-lg leading-snug text-navy-900">{p.role}</h3>
                <p className="mt-3">
                  <span className="inline-block border border-navy-900/15 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60">
                    {p.qualification}
                  </span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">{p.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ ETHICS BAND ============ */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow onDark>Ethics · Independence · Confidentiality</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
              The commitments we do not negotiate.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {ethics.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <h3 className="font-display text-xl text-gold-400">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{e.text}</p>
              </Reveal>
            ))}
          </div>
          <figure className="mt-14 border-l-2 border-gold-500 pl-6">
            <blockquote className="font-display text-2xl italic leading-snug text-white sm:text-3xl">
              “We sign only what we can stand behind.”
            </blockquote>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
              Founding principle · {site.name}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ MEMBERSHIPS ============ */}
      <section className="border-b border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Qualifications & memberships"
            title="Regulated, registered and continually trained."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {memberships.map((m) => (
              <li
                key={m}
                className="border border-navy-900/15 bg-paper px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Approach to client service"
          title="Four steps, every engagement, no shortcuts."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 90}>
              <div className="h-full border-t-2 border-gold-500 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  {a.step}
                </p>
                <h3 className="mt-2 font-display text-xl text-navy-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-navy-900/10 bg-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <Eyebrow>Work with us</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            Meet the firm behind the signature.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            One conversation is usually enough to know whether we are the right firm for your
            next audit, filing or decision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/consultation">Request a Consultation</Button>
            <Button href="/careers" variant="outline">
              Join the practice
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
