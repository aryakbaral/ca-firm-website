import AdminShell from "@/components/admin/AdminShell";
import LeadsTables from "@/components/admin/LeadsTables";

export const metadata = { title: "Leads — Admin", robots: { index: false, follow: false } };

export default function AdminLeadsPage() {
  return (
    <AdminShell active="Leads & consultations" title="Leads & consultations">
      <LeadsTables />
    </AdminShell>
  );
}
