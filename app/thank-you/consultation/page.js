import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

export const metadata = { title: "Thank you — consultation requested" };

export default function ThankYouContact() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="ledger-grid-light absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-10 sm:py-32">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-gold-500 text-gold-700">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M4 14l6 6 12-14" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        </span>
        <h1 className="mt-8 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
          Thank you - your consultation is requested.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
          Your enquiry is with the firm. A partner will respond within{" "}
          <strong className="font-semibold text-navy-900">one business day</strong> — by your
          preferred contact method.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/services">View our services</Button>
          <Button href="/insights" variant="outline">
            A partner will confirm your slot - in person, by phone or by video — within one business day, with any documents worth bringing.
          </Button>
        </div>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
          Urgent? Call{" "}
          <Link href={`tel:${site.phoneHref}`} className="text-gold-700 underline underline-offset-4">
            {site.phone}
          </Link>{" "}
          · {site.hours}
        </p>
      </div>
    </section>
  );
}
