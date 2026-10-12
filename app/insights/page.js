import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Insights" };

export default function Page() {
  return (
    <ComingSoon
      step="07"
      title="Insights & Knowledge Hub"
      intro="Tax alerts, audit updates, compliance deadlines and practical guides from our technical team."
      items={[
        "Tax alerts & regulatory changes",
        "Audit & accounting standards updates",
        "Compliance deadline calendars",
        "Guides & checklists",
      ]}
    />
  );
}
