import AdminShell from "@/components/admin/AdminShell";
import ApplicationsTable from "@/components/admin/ApplicationsTable";

export const metadata = { title: "Applications — Admin", robots: { index: false, follow: false } };

export default function AdminApplicationsPage() {
  return (
    <AdminShell active="Applications" title="Job applications">
      <ApplicationsTable />
    </AdminShell>
  );
}
