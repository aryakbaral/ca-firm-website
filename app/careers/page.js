import { ComingSoon } from "@/components/ui";

export const metadata = { title: "Careers" };

export default function Page() {
  return (
    <ComingSoon
      step="08"
      title="Careers at Baral & K.C. Associates"
      intro="Build your practice with structured mentorship, real engagement exposure and support for professional qualification."
      items={[
        "Current vacancies",
        "Internship opportunities",
        "Graduate trainee programme",
        "Culture & professional development",
      ]}
    />
  );
}
