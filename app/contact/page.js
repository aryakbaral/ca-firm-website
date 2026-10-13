import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import { Eyebrow, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Baral & K.C. Associates, Chartered Accountants, Lalitpur. Phone, email, office address and business hours. All enquiries handled in strict confidence.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Contact us</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            Talk to the <em className="italic text-gold-600">firm</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Every enquiry is read by a partner and handled in strict confidence. No call
            centres, no ticket numbers — a name and a reply within one business day.
          </p>
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Office</p>
                <p className="mt-2 leading-relaxed text-ink/80">
                  {site.name}
                  <br />
                  {site.address}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Call</p>
                <p className="mt-2">
                  <a href={`tel:${site.phoneHref}`} className="font-display text-xl text-navy-900 hover:text-gold-700">
                    {site.phone}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Write</p>
                <p className="mt-2">
                  <a href={`mailto:${site.email}`} className="font-display text-xl text-navy-900 hover:text-gold-700">
                    {site.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Business hours</p>
                <p className="mt-2 text-ink/80">{site.hours}</p>
                <p className="mt-1 text-sm text-ink/55">Closed on public holidays.</p>
              </div>
              <div className="border-l-2 border-gold-500 bg-paper p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-700">
                  Confidentiality
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  Information you share is used only to respond to you. It is never sold, never
                  shared outside the firm, and never discussed outside the engagement team. See
                  our{" "}
                  <a href="/legal/privacy-policy" className="underline decoration-gold-500 underline-offset-4 hover:text-gold-700">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <SectionHeading eyebrow="Find us" title="Lalitpur, Nepal." />
          <div className="mt-8 border border-navy-900/10 bg-white p-2">
            <iframe
              title="Map showing the location of Baral & K.C. Associates in Lalitpur, Nepal"
              src="https://www.google.com/maps?q=Lalitpur,Nepal&output=embed"
              className="h-[22rem] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
            Precise building and floor details are shared with your confirmation email.
          </p>
        </div>
      </section>
    </>
  );
}
