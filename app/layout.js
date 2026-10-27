import "./globals.css";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
        default: `${site.name} | ${site.descriptor} in Nepal | Audit, Tax & Advisory`,
    template: `%s | ${site.name}`,
  },
    description:
    "Baral & K.C. Associates is a Chartered Accountancy firm in Lalitpur, Nepal, providing audit and assurance, tax, accounting, advisory, corporate secretarial and payroll services to businesses, financial institutions, development organisations and individuals.",
  keywords: [
    "Chartered Accountants",
    "Audit firm",
    "Accounting firm Nepal",
    "Tax consultants",
    "External audit services",
    "Internal audit services",
    "Bookkeeping services",
    "Corporate tax advisory",
    "VAT compliance",
    "Business consulting firm",
  ],
  openGraph: {
    title: `${site.name} — ${site.descriptor}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.descriptor}`,
    description: site.tagline,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "ProfessionalService"],
  name: site.name,
  description: site.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  telephone: site.phoneHref,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  knowsAbout: [
    "Statutory Audit",
    "Internal Audit",
    "Corporate Tax",
    "VAT Compliance",
    "Bookkeeping",
    "Payroll",
    "Company Secretarial",
    "Business Advisory",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
