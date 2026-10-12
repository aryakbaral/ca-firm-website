import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/ui";

const pages = {
  "privacy-policy": { title: "Privacy Policy" },
  "terms-of-use": { title: "Terms of Use" },
  disclaimer: { title: "Disclaimer" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = pages[params.slug];
  return { title: page ? page.title : "Legal" };
}

export default function Page({ params }) {
  const page = pages[params.slug];
  if (!page) notFound();
  return (
    <ComingSoon
      step="09"
      title={page.title}
      intro="This policy is being finalised with our data-protection wording and will be published shortly."
    />
  );
}
