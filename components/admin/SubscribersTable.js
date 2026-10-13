"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { downloadCSV } from "@/components/admin/csv";

export default function SubscribersTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function load() {
      if (!supabase) return;
      const r = await supabase
        .from("newsletters")
        .select("*")
        .order("subscribed_at", { ascending: false });
      setRows(r.data || []);
    }
    load();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-xl text-navy-900">Newsletter subscribers</h2>
        <button
          onClick={() => downloadCSV("subscribers.csv", rows)}
          className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
        >
          Export CSV
        </button>
      </div>
      <div className="mt-4 overflow-x-auto border border-navy-900/10 bg-white">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr className="border-b border-navy-900/10 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Subscribed</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-navy-900/5">
                <td className="px-4 py-3 font-medium text-navy-900">{r.email}</td>
                <td className="px-4 py-3 text-ink/70">{r.name || "—"}</td>
                <td className="px-4 py-3 text-ink/60">{new Date(r.subscribed_at).toLocaleDateString()}</td>
                <td className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-700">{r.status}</td>
              </tr>
            ))}
            {!rows.length && (
              <tr><td colSpan={4} className="px-4 py-6 text-center text-ink/50">No subscribers yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
