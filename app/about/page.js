import { ComingSoon } from "@/components/ui";

export const metadata = { title: "About Us" };

export default function Page() {
  return (
    <ComingSoon
      step="04"
      title="About Baral & K.C. Associates"
      intro="Our history, mission, values, leadership and our commitment to ethics, independence and confidentiality are being prepared for publication."
      items={[
        "Firm history & milestones",
        "Mission, vision & core values",
        "Leadership & qualifications",
        "Ethics, independence & confidentiality",
      ]}
    />
  );
}
