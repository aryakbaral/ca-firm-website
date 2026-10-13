"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminOverview() {
  const [counts, setCounts] = useState(null);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    async function load() {
      if (!supabase) return;
      const [c, q, j, n] = await Promise.all([
        supabase.from("contacts").select("id, status"),
        supabase.from("consultation_requests").select("id"),
        supabase.from("job_applications").select("id"),
        supabase.from("newsletters").select("id"),
      ]);
      setCounts({
        newLeads: (c.data || []).filter((r) => r.status === "new").length,
        contacts: c.data?.length || 0,
        consultations: q.data?.length || 0,
        applications: j.data?.length || 0,
        subscribers: n.data?.length || 0,
      });
      const r = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
      setRecent(r.data || []);
    }
    load();
  }, []);

  if (!counts) {
    return <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">Loading…</p>;
  }

  const cards = [
    { label: "New leads", value: counts.newLeads, href: "/admin/leads" },
    { label: "Total enquiries", value: counts.contacts, href: "/admin/leads" },
    { label: "Consultations", value: counts.consultations, href: "/admin/leads" },
    { label: "Applications", value: counts.applications, href: "/admin/applications" },
    { label: "Subscribers", value: counts.subscribers, href: "/admin/subscribers" },
  ];

  return (
    <div>
      <div className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="bg-white p-6 transition-colors hover:bg-paper">
            <p className="font-display text-4xl text-navy-900">{c.value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{c.label}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-10 font-display text-xl text-navy-900">Latest enquiries</h2>
      <div className="mt-4 overflow-x-auto border border-navy-900/10 bg-white">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-b border-navy-900/10 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Received</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((r) => (
              <tr key={r.id} className="border-b border-navy-900/5">
                <td className="px-4 py-3 font-medium text-navy-900">{r.full_name}</td>
                <td className="px-4 py-3 text-ink/70">{r.service_needed}</td>
                <td className="px-4 py-3 text-ink/60">{new Date(r.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-700">
                  {r.status}
                </td>
              </tr>
            ))}
            {!recent.length && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-ink/50">No enquiries yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
