import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Request a Consultation" };

export default function Page() {
  return (
    <ComingSoon
      step="09"
      title="Request a Consultation"
      intro="Tell us what you need and how you would like to meet. A partner will respond within one business day."
      items={[
        "In-person at our Lalitpur office",
        "Phone call",
        "Video meeting",
        "Secure document upload",
      ]}
    />
  );
}
