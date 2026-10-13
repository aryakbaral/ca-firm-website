import Link from "next/link";
import { posts as seedPosts, postCategories } from "@/lib/posts";
import { supabase } from "@/lib/supabase";
import { site } from "@/lib/site";
import { Button, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Insights",
  description:
    "Tax alerts, audit updates, accounting standards notes, compliance calendars and advisory insights from Baral & K.C. Associates, Chartered Accountants, Lalitpur.",
};

export const catSlug = (c) => c.toLowerCase().replace(/\s+/g, "-");

function chip(isActive) {
  return `border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
    isActive
      ? "border-navy-900 bg-navy-900 text-white"
      : "border-navy-900/20 text-ink/65 hover:border-navy-900 hover:text-navy-900"
  }`;
}

async function getAllPosts() {
  let dbPosts = [];
  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });
    if (!error && data) dbPosts = data;
  }
    const seeds = seedPosts
    .filter((s) => !dbPosts.some((d) => d.slug === s.slug))
    .map((s) => ({ ...s, date_label: s.date_label || s.dateLabel }));
  return [...dbPosts, ...seeds];
}

export default async function InsightsPage({ searchParams }) {
  const active = searchParams?.category || null;
  const all = await getAllPosts();
  const list = active ? all.filter((p) => catSlug(p.category) === active) : all;
  const [lead, ...rest] = list;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Knowledge hub</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            Updates worth <em className="italic text-gold-600">your attention</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Tax alerts, audit updates, standards notes and compliance calendars — written by the
            firm&apos;s technical desks for the people who sign the filings.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/insights" className={chip(!active)}>
              All notes
            </Link>
            {postCategories.map((c) => (
              <Link key={c} href={`/insights?category=${catSlug(c)}`} className={chip(active === catSlug(c))}>
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-16">
          {lead ? (
            <>
              <Reveal>
                <Link
                  href={`/insights/${lead.slug}`}
                  className="group grid gap-8 border-t-2 border-gold-500 bg-white p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                      {lead.category} · {lead.date_label}
                    </p>
                    <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-navy-900 transition-colors group-hover:text-gold-700 sm:text-4xl">
                      {lead.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{lead.excerpt}</p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45 transition-colors group-hover:text-gold-700">
                    Read note →
                  </span>
                </Link>
              </Reveal>

              <div className="mt-10 border-t border-navy-900/10">
                {rest.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 50}>
                    <Link
                      href={`/insights/${p.slug}`}
                      className="group grid gap-3 border-b border-navy-900/10 py-6 transition-colors hover:bg-white md:grid-cols-[11rem_1fr_auto] md:items-baseline md:px-4"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                        {p.category} · {p.date_label}
                      </span>
                      <span>
                        <span className="block font-display text-xl text-navy-900 transition-colors group-hover:text-gold-700">
                          {p.title}
                        </span>
                        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/65">
                          {p.excerpt}
                        </span>
                      </span>
                      <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 transition-colors group-hover:text-gold-700 md:block">
                        {p.read_time}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <p className="py-16 text-center text-ink/60">No notes in this category yet.</p>
          )}
        </div>
      </section>

      {/* Subscribe teaser */}
      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Stay current</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy-900">
              The compliance calendar, in your inbox.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-ink/70">
              A monthly note with filing dates, rate changes and one practical checklist. No
              marketing, ever. Subscriptions open shortly.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
              Meanwhile, reach the desks directly
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <Button href="/consultation">Request a Consultation</Button>
              <Button href={`mailto:${site.email}`} variant="outline">
                Email the desks
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
