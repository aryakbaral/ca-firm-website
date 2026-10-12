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
    default: `${site.name} — ${site.descriptor} in Lalitpur | Audit, Tax & Advisory`,
    template: `%s | ${site.name}`,
  },
  description:
    "Baral & K.C. Associates is a firm of Chartered Accountants in Lalitpur, Nepal, providing audit & assurance, taxation, accounting & bookkeeping, payroll, corporate secretarial and business advisory services to companies, NGOs, startups and individuals.",
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
  },
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
      </body>
    </html>
  );
}
