import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { ComingSoon } from "@/components/ui";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = site.services.find((s) => s.slug === params.slug);
  return { title: service ? service.title : "Service" };
}

export default function Page({ params }) {
  const service = site.services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return (
    <ComingSoon
      step="05"
      title={service.title}
      intro={`${service.blurb} A detailed practice page — scope, approach, deliverables and FAQs — is being prepared.`}
    />
  );
}
