import "./globals.css";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";

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
    default: "Sterling & Grant — Chartered Accountants | Audit, Tax & Advisory",
    template: "%s | Sterling & Grant Chartered Accountants",
  },
  description:
    "Sterling & Grant is a firm of Chartered Accountants delivering audit and assurance, taxation, accounting, payroll, corporate secretarial and business advisory services to companies, institutions, NGOs, startups and individuals.",
  keywords: [
    "Chartered Accountants",
    "Audit firm",
    "External audit services",
    "Internal audit services",
    "Tax consultants",
    "VAT compliance",
    "Bookkeeping services",
    "Corporate tax advisory",
    "Business consulting firm",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
