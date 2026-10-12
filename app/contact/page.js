import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <ComingSoon
      step="09"
      title="Contact Our Team"
      intro="Reach the firm by phone, email or in person at our Lalitpur office. All enquiries are treated in strict confidence."
      items={[
        "Enquiry form with service selection",
        "Office address & map",
        "Business hours",
        "Confidentiality & privacy statement",
      ]}
    />
  );
}
