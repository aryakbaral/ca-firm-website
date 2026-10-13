import AdminShell from "@/components/admin/AdminShell";
import SubscribersTable from "@/components/admin/SubscribersTable";

export const metadata = { title: "Subscribers — Admin", robots: { index: false, follow: false } };

export default function AdminSubscribersPage() {
  return (
    <AdminShell active="Subscribers" title="Newsletter subscribers">
      <SubscribersTable />
    </AdminShell>
  );
}
