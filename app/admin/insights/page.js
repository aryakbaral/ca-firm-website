import AdminShell from "@/components/admin/AdminShell";
import InsightsAdmin from "@/components/admin/InsightsAdmin";

export const metadata = { title: "Insights CMS — Admin", robots: { index: false, follow: false } };

export default function AdminInsightsPage() {
  return (
    <AdminShell active="Insights CMS" title="Insights publishing desk">
      <InsightsAdmin />
    </AdminShell>
  );
}
