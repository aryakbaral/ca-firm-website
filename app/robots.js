const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ca-firm-website.vercel.app";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/thank-you"] }],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
