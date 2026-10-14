import { services } from "@/lib/services";
import { posts as seedPosts } from "@/lib/posts";
import { supabase } from "@/lib/supabase";

export const revalidate = 3600;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ca-firm-website.vercel.app";

export default async function sitemap() {
  const now = new Date();

  let cms = [];
  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, published_at")
      .eq("status", "published");
    cms = data || [];
  }
  const cmsSet = new Set(cms.map((c) => c.slug));

  const insightEntries = [
    ...cms.map((c) => ({
      url: `${BASE}/insights/${c.slug}`,
      lastModified: c.published_at ? new Date(c.published_at) : now,
    })),
    ...seedPosts
      .filter((p) => !cmsSet.has(p.slug))
      .map((p) => ({ url: `${BASE}/insights/${p.slug}`, lastModified: now })),
  ];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/insights",
    "/careers",
    "/contact",
    "/consultation",
    "/legal/privacy-policy",
    "/legal/terms-of-use",
    "/legal/disclaimer",
    "/legal/cookie-policy",
    "/legal/recruitment-privacy-notice",
  ].map((r) => ({ url: `${BASE}${r}`, lastModified: now }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightEntries];
}
