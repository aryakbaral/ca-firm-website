import { site } from "@/lib/site";
import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Services" };

export default function Page() {
  return (
    <ComingSoon
      step="05"
      title="Our Services"
      intro="Six integrated practices covering the full life-cycle of your financial and compliance responsibilities."
      items={site.services.map((s) => s.title)}
    />
  );
}
