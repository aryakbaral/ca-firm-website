import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { Button, Eyebrow } from "@/components/ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Insight" };
  return { title: post.title, description: post.excerpt };
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 font-display text-2xl leading-snug text-navy-900">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-5 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
              <span className="mt-3 h-px w-4 shrink-0 bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-gold-500 pl-6 font-display text-xl italic leading-snug text-navy-900">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-5 leading-relaxed text-ink/80">{block.text}</p>;
  }
}

export default function PostPage({ params }) {
  const index = posts.findIndex((p) => p.slug === params.slug);
  const post = posts[index];
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-14 sm:px-10 lg:pt-20">
          <Link
            href="/insights"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold-700"
          >
            ← All insights
          </Link>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-700">
            {post.category}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-[1.15] text-navy-900 sm:text-4xl lg:text-[2.8rem]">
            {post.title}
          </h1>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
            {post.author} · {post.dateLabel} · {post.readTime}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 lg:py-16">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          <div className="mt-12 border-t border-navy-900/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
              Prepared by
            </p>
            <p className="mt-2 font-semibold text-navy-900">
              {post.author} · {site.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              This note is general guidance and not advice on your specific facts. Rates,
              thresholds and deadlines change; confirm the current position before acting.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-navy-900/10 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-2xl text-navy-900">Continue reading</h2>
            <Link
              href="/insights"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700 transition-colors hover:text-gold-600"
            >
              All insights →
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group border-t-2 border-gold-500 bg-white p-7 transition-colors hover:bg-mist"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                  {p.category} · {p.dateLabel}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug text-navy-900 transition-colors group-hover:text-gold-700">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="ledger-grid absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-10 lg:py-20">
          <Eyebrow onDark>Apply it to your facts</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
            Discuss what this means for you.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            General notes cannot see your ledger. A partner can — usually within one business
            day.
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
