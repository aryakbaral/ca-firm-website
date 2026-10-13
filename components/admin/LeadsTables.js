"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { downloadCSV } from "@/components/admin/csv";

const contactStatuses = ["new", "contacted", "qualified", "closed"];
const consultStatuses = ["new", "contacted", "confirmed", "closed"];
const selectCls =
  "border border-navy-900/20 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70 focus:border-gold-600 focus:outline-none";

export default function LeadsTables() {
  const [contacts, setContacts] = useState([]);
  const [consults, setConsults] = useState([]);

  async function load() {
    if (!supabase) return;
    const [c, q] = await Promise.all([
      supabase.from("contacts").select("*").order("created_at", { ascending: false }),
      supabase.from("consultation_requests").select("*").order("created_at", { ascending: false }),
    ]);
    setContacts(c.data || []);
    setConsults(q.data || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(table, id, status) {
    await supabase.from(table).update({ status }).eq("id", id);
    load();
  }

  return (
    <div className="space-y-12">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-xl text-navy-900">Contact enquiries</h2>
          <button
            onClick={() => downloadCSV("contacts.csv", contacts)}
            className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
          >
            Export CSV
          </button>
        </div>
        <div className="mt-4 overflow-x-auto border border-navy-900/10 bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead>
              <tr className="border-b border-navy-900/10 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((r) => (
                <tr key={r.id} className="border-b border-navy-900/5 align-top">
                  <td className="px-4 py-3 font-medium text-navy-900">
                    {r.full_name}
                    {r.company_name && <span className="block text-xs font-normal text-ink/55">{r.company_name}</span>}
                  </td>
                  <td className="px-4 py-3 text-ink/70">
                    {r.email}
                    <span className="block text-xs text-ink/55">{r.phone} · prefers {r.preferred_contact_method}</span>
                  </td>
                  <td className="px-4 py-3 text-ink/70">{r.service_needed}</td>
                  <td className="max-w-[18rem] px-4 py-3 text-ink/70">{r.message}</td>
                  <td className="px-4 py-3">
                    <select
                      className={selectCls}
                      value={r.status}
                      onChange={(e) => setStatus("contacts", r.id, e.target.value)}
                    >
                      {contactStatuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {!contacts.length && (
                <tr><td colSpan={5} className="px-4 py-6 text-center text-ink/50">No enquiries yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-xl text-navy-900">Consultation requests</h2>
          <button
            onClick={() => downloadCSV("consultations.csv", consults)}
            className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
          >
            Export CSV
          </button>
        </div>
        <div className="mt-4 overflow-x-auto border border-navy-900/10 bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead>
              <tr className="border-b border-navy-900/10 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Type & slot</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Notes</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {consults.map((r) => (
                <tr key={r.id} className="border-b border-navy-900/5 align-top">
                  <td className="px-4 py-3 font-medium text-navy-900">
                    {r.full_name}
                    <span className="block text-xs font-normal text-ink/55">{r.email} · {r.phone}</span>
                  </td>
                  <td className="px-4 py-3 text-ink/70">
                    {r.consultation_type}
                    <span className="block text-xs text-ink/55">{r.preferred_date} · {r.preferred_time}</span>
                  </td>
                  <td className="px-4 py-3 text-ink/70">{r.service_needed}</td>
                  <td className="max-w-[16rem] px-4 py-3 text-ink/70">{r.message || "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      className={selectCls}
                      value={r.status}
                      onChange={(e) => setStatus("consultation_requests", r.id, e.target.value)}
                    >
                      {consultStatuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {!consults.length && (
                <tr><td colSpan={5} className="px-4 py-6 text-center text-ink/50">No requests yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
