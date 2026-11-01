import ConsultationForm from "@/components/forms/ConsultationForm";
import { Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Request a Consultation",
  description:
    "Book a consultation with Baral & K.C. Associates, Chartered Accountants — in person in Lalitpur, by phone or by video. A partner responds within one business day.",
};

const steps = [
  {
    no: "01",
    title: "Share Your Requirements",
    text: "Complete the short form below, telling us about your needs and how you would prefer to meet.",
  },
  {
    no: "02",
    title: "Confirmation",
    text: "Within one business day, a senior member of our team will confirm a meeting time and let you know of any documents that would be helpful.",
  },
  {
    no: "03",
    title: "Consultation",
    text: "A 45-minute meeting at no charge and with no obligation, concluding with clear, practical next steps.",
  },
];

export default function ConsultationPage({ searchParams }) {
  const service = searchParams?.service || "";

  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div aria-hidden="true" className="rosette absolute -right-48 -top-64 h-[42rem] w-[42rem]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-10 lg:pb-20 lg:pt-20">
          <Eyebrow>Request a consultation</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] text-navy-900 sm:text-5xl lg:text-[3.3rem]">
            Schedule a consultation with <em className="italic text-gold-600">our Leaders</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Meet with us in person at our Lalitpur office, by phone or by video call. Your initial consultation is complimentary and confidential.
          </p>
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 90}>
              <div className="h-full border-t-2 border-gold-500 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  Step {s.no}
                </p>
                <h2 className="mt-2 font-display text-xl text-navy-900">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-mist">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-20">
          <Reveal>
            <ConsultationForm initialService={service} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
