import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { Eyebrow } from "@/components/ui";


const pages = {
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "Last updated: October 2026",
    sections: [
      {
        h: "What we collect",
        ps: [
          "When you use our enquiry or consultation forms we collect your name, company (if given), email address, phone number, the service you enquire about, your preferred contact method and your message. When you subscribe to updates we collect your email address. When you apply for a role we collect the details in the application form and your CV — see the Recruitment Privacy Notice.",
        ],
      },
      {
        h: "Why we collect it",
        ps: [
          "To respond to your enquiry, arrange consultations, provide the services you engage us for, and meet our legal and professional obligations as Chartered Accountants. We rely on your consent, our contractual relationship, and legal or regulatory requirements — never on selling your data, which we do not do.",
        ],
      },
      {
        h: "Where it is stored and who can see it",
        ps: [
          "Website submissions are stored in a secure database with access restricted to authorised firm personnel. Engagement information is held under engagement-level access control. We do not sell, rent or share personal information with third parties except where law or professional standards require it.",
        ],
      },
      {
        h: "How long we keep it",
        ps: [
          "Enquiries are kept for up to 24 months after last contact. Engagement records are kept for the periods required by law and professional standards. Recruitment data is deleted at the close of the selection cycle unless you ask us to keep it.",
        ],
      },
      {
        h: "Your rights",
        ps: [
          "You may ask us at any time to access, correct or delete your personal information, or to withdraw consent. Write to " + site.email + " and we will respond within fifteen days.",
        ],
      },
      {
        h: "Cookies",
        ps: [
          "This website uses only essential cookies required for it to function. See the Cookie Policy for details.",
        ],
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    updated: "Last updated: October 2026",
    sections: [
      {
        h: "Use of this website",
        ps: [
          "This website is provided by " + site.name + " for general information about the firm and its services. You may view, download and print pages for your own internal use, without alteration of notices or marks.",
        ],
      },
      {
        h: "No professional advice",
        ps: [
          "Content on this website, including insights and guides, is general in nature and does not constitute professional advice. No engagement, and no accountant–client relationship, is created by use of this website or by submitting a form. Advice is provided only under a signed engagement letter on your specific facts.",
        ],
      },
      {
        h: "Intellectual property",
        ps: [
          "All content, design and marks on this website are the property of the firm or its licensors. Reproduction for commercial purposes without written permission is prohibited.",
        ],
      },
      {
        h: "Liability",
        ps: [
          "To the extent permitted by law, the firm is not liable for loss arising from reliance on website content, or from interruption or errors of the website. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
      {
        h: "Governing law",
        ps: ["These terms are governed by the laws of Nepal, and disputes are subject to the courts of competent jurisdiction in Nepal."],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: October 2026",
    sections: [
      {
        h: "General information only",
        ps: [
          "Materials on this website — including tax alerts, audit updates and compliance calendars — summarise complex law in good faith at the date of publication. Statutes, rates and deadlines change; confirm the current position before acting.",
        ],
      },
      {
        h: "No engagement created",
        ps: [
          "Reading this website, subscribing to updates or submitting a form does not create a professional relationship. The firm accepts engagements only under written engagement letters, subject to independence and conflict checks.",
        ],
      },
      {
        h: "External links",
        ps: [
          "Links to external sites are provided for convenience. The firm does not control and is not responsible for their content.",
        ],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    updated: "Last updated: October 2026",
    sections: [
      {
        h: "What cookies we use",
        ps: [
          "This website sets only essential cookies — small files required for the site to function, such as remembering nothing more than your session's technical state. We do not set advertising cookies, and we do not set analytics cookies without first asking for your consent.",
        ],
      },
      {
        h: "How to control cookies",
        ps: [
          "You can block or delete cookies in your browser settings at any time. Because we use only essential cookies, blocking cookies will not degrade the content you see, though some technical features may misbehave.",
        ],
      },
    ],
  },
  "recruitment-privacy-notice": {
    title: "Recruitment Privacy Notice",
    updated: "Last updated: October 2026",
    sections: [
      {
        h: "What we collect from applicants",
        ps: [
          "Name, contact details, current employer (if given), experience, qualifications, expected salary, notice period, cover letter, CV and any links you provide.",
        ],
      },
      {
        h: "How we use it",
        ps: [
          "Solely to assess your application, communicate with you about it, and meet legal obligations relating to employment. Applications are seen only by the hiring partner and, where relevant, one reviewer.",
        ],
      },
      {
        h: "Retention and security",
        ps: [
          "Applications are held securely and deleted at the close of the selection cycle unless you expressly ask us to keep your file for future openings. CVs are never shared outside the firm.",
        ],
      },
      {
        h: "Your rights",
        ps: ["You may request access to or deletion of your application at any time by writing to " + site.email + "."],
      },
    ],
  },
};

const related = [
  { slug: "privacy-policy", label: "Privacy Policy" },
  { slug: "terms-of-use", label: "Terms of Use" },
  { slug: "disclaimer", label: "Disclaimer" },
  { slug: "cookie-policy", label: "Cookie Policy" },
  { slug: "recruitment-privacy-notice", label: "Recruitment Privacy Notice" },
];

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = pages[params.slug];
  if (!page) return { title: "Legal" };
  return { title: page.title, description: `${page.title} of ${site.name}, Chartered Accountants, Lalitpur.` };
}

export default function LegalPage({ params }) {
  const page = pages[params.slug];
  if (!page) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="column-rules absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-14 sm:px-10 lg:pt-20">
          <Eyebrow>Legal & compliance</Eyebrow>
          <h1 className="mt-5 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
            {page.updated} · {site.name}
          </p>
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 lg:py-16">
          {page.sections.map((s) => (
            <div key={s.h} className="mt-10 first:mt-0">
              <h2 className="font-display text-2xl text-navy-900">{s.h}</h2>
              {s.ps.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-14 border-t border-navy-900/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
              Related policies
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {related
                .filter((r) => r.slug !== params.slug)
                .map((r) => (
                  <Link
                    key={r.slug}
                    href={`/legal/${r.slug}`}
                    className="border border-navy-900/15 bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/65 transition-colors hover:border-gold-600 hover:text-gold-700"
                  >
                    {r.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
