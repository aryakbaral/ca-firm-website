import AdminShell from "@/components/admin/AdminShell";
import AdminOverview from "@/components/admin/AdminOverview";

export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default function AdminPage() {
  return (
    <AdminShell active="Overview" title="Overview">
      <AdminOverview />
    </AdminShell>
  );
}
