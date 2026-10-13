import { jobs } from "@/lib/jobs";
import { site } from "@/lib/site";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Careers",
  description:
    "Build your practice at Baral & K.C. Associates, Chartered Accountants, Lalitpur. Current openings, articleship, internships and a culture of mentorship and ethics.",
};

const why = [
  {
    no: "01",
    title: "Partner mentorship, not supervision",
    text: "Every clerk and associate is assigned a partner mentor. Review meetings teach judgement, not just corrections.",
  },
  {
    no: "02",
    title: "Engagement exposure from year one",
    text: "Small teams mean you see the whole file — planning, fieldwork, reporting — not one schedule for three years.",
  },
  {
    no: "03",
    title: "Study and examination support",
    text: "Study leave, exam fees and revision blocks for CA and ACCA candidates, written into the engagement calendar.",
  },
  {
    no: "04",
    title: "An ethics-first culture",
    text: "We decline work we cannot do independently. You will never be asked to sign, skip or soften.",
  },
];

const ladder = [
  {
    stage: "Article clerkship",
    text: "Three and a half years of supervised practice across audit, tax and accounting, rotated every six months.",
  },
  {
    stage: "Senior associate",
    text: "In-charge of SME engagements, reviewer of clerks' work, first name on management letters.",
  },
  {
    stage: "Manager",
    text: "Portfolio responsibility, client advisory contact and technical review of a practice area.",
  },
  {
    stage: "Partner track",
    text: "Practice development, independence leadership and a seat on the technical committee.",
  },
];

const programs = [
  {
    mono: "8–12 weeks · Paid",
    title: "Internship programme",
    text: "For final-year BBS/MBS and ACCA students: a supervised rotation through bookkeeping, tax compliance and audit fieldwork, ending with a written evaluation you can take to any employer.",
  },
  {
    mono: "2 years · Full-time",
    title: "Graduate trainee programme",
    text: "For new graduates committing to the CA path: structured articleship support, exam leave and a mentor partner, with annual progression reviews in writing.",
  },
];

const applySteps = [
  "Complete the application form and upload your CV — PDF, DOC or DOCX, maximum 5 MB.",
  "We acknowledge every application within two business days; shortlisted candidates receive a written brief before interviews.",
  "Interviews include a technical conversation and a file-review exercise. We never assign unpaid take-home work.",
];

export default function CareersPage({ searchParams }) {
  const jobSlug = searchParams?.job || "";
  const selected = jobs.find((j) => j.slug === jobSlug);
  const initialJob = selected ? selected.title : "";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            Build your <em className="italic text-gold-600">practice</em> here.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            We hire people who care about evidence and grow people who care about judgement. In
            return you get exposure, mentorship and a signature worth having.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#openings">View open positions</Button>
            <Button href="#apply" variant="outline">
              Apply now
            </Button>
          </div>
        </div>
      </section>

      {/* Why people stay */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading eyebrow="Why people stay" title="Four promises we make to every hire." />
          <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.no} delay={i * 80} className="bg-white">
                <div className="h-full p-8 sm:p-10">
                  <p className="font-mono text-xs text-gold-700">{w.no}</p>
                  <h3 className="mt-3 font-display text-xl text-navy-900">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth ladder */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Growth & mentorship"
          title="A ladder with rungs you can see."
          intro="Progression at the firm is written down: what each stage owns, what it reviews, and what earns the next step."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {ladder.map((l, i) => (
            <Reveal key={l.stage} delay={i * 90}>
              <div className="h-full border-t-2 border-gold-500 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  Stage {i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-navy-900">{l.stage}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="border-y border-navy-900/10 bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading
            eyebrow="Current openings"
            title="Roles open today."
            intro="Applications are handled in confidence by the hiring partner only."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={i * 80}>
                <div className="flex h-full flex-col border border-navy-900/10 border-t-2 border-t-gold-500 bg-white p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                    {job.department}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-navy-900">{job.title}</h3>
                  <p className="mt-3 flex flex-wrap gap-2">
                    {[job.location, job.type, job.experience].map((c) => (
                      <span
                        key={c}
                        className="border border-navy-900/15 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60"
                      >
                        {c}
                      </span>
                    ))}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{job.summary}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-gold-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href={`/careers?job=${job.slug}#apply`} variant="gold" size="sm">
                      Apply now
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <SectionHeading eyebrow="Students & graduates" title="Two structured doors into the profession." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full border-l-2 border-gold-500 bg-paper p-8 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">{p.mono}</p>
                <h3 className="mt-3 font-display text-2xl text-navy-900">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          <div>
            <Reveal>
              <SectionHeading eyebrow="How to apply" title="Three steps, no black holes." />
              <ol className="mt-8 space-y-5">
                {applySteps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="font-mono text-xs text-gold-700">{String(i + 1).padStart(2, "0")}</span>
                    <p className="max-w-xl text-sm leading-relaxed text-ink/75">{s}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 border-t-2 border-gold-500 bg-navy-900 p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">
                  Your CV is protected
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Uploads are encrypted in transit and stored in a private vault. Only the hiring
                  partner can open them, and files are deleted at the close of the selection
                  cycle unless you ask us to keep them. See the{" "}
                  <a href="/legal/recruitment-privacy-notice" className="underline decoration-gold-500 underline-offset-4 hover:text-gold-300">
                    Recruitment Privacy Notice
                  </a>
                  .
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Prefer email? {site.email}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <ApplicationForm initialJob={initialJob} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
