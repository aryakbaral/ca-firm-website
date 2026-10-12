import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Industries" };

export default function Page() {
  return (
    <ComingSoon
      step="06"
      title="Industries We Serve"
      intro="Sector-specific audit, tax and advisory experience across the economy."
      items={[
        "Banking & financial services",
        "NGOs & donor-funded organisations",
        "Manufacturing & retail",
        "Real estate & construction",
        "Healthcare & education",
        "Technology & startups",
      ]}
    />
  );
}
