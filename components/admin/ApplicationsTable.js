"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { downloadCSV } from "@/components/admin/csv";

const statuses = ["received", "under_review", "shortlisted", "interview", "rejected", "hired"];
const selectCls =
  "border border-navy-900/20 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70 focus:border-gold-600 focus:outline-none";

export default function ApplicationsTable() {
  const [rows, setRows] = useState([]);

  async function load() {
    if (!supabase) return;
    const r = await supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false });
    setRows(r.data || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(id, status) {
    await supabase.from("job_applications").update({ application_status: status }).eq("id", id);
    load();
  }

  async function openCv(path) {
    if (!path) return;
    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUrl(path, 60 * 60 * 24);
    if (!error) window.open(data.signedUrl, "_blank");
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-xl text-navy-900">Job applications</h2>
        <button
          onClick={() => downloadCSV("applications.csv", rows)}
          className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
        >
          Export CSV
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {rows.map((r) => (
          <details key={r.id} className="group border border-navy-900/10 bg-white">
            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="font-semibold text-navy-900">{r.full_name}</span>
                <span className="block text-xs text-ink/60">
                  {r.position_applied_for} · {r.years_of_experience || "—"} yrs · {r.professional_qualification || r.highest_qualification || "—"}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                {new Date(r.created_at).toLocaleDateString()}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-700">
                {r.application_status}
              </span>
            </summary>
            <div className="grid gap-6 border-t border-navy-900/10 bg-paper px-5 py-5 md:grid-cols-2">
              <div className="space-y-2 text-sm text-ink/75">
                <p><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Email</span><br />{r.email}</p>
                <p><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Phone</span><br />{r.phone}</p>
                <p><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Current employer</span><br />{r.current_employer || "—"}</p>
                <p><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Notice / expected salary</span><br />{r.notice_period || "—"} / {r.expected_salary || "—"}</p>
                {r.linkedin_url && <p><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">LinkedIn</span><br /><a className="underline decoration-gold-500 underline-offset-4" href={r.linkedin_url} target="_blank" rel="noreferrer">{r.linkedin_url}</a></p>}
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Cover letter</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink/75">
                  {r.cover_letter || "—"}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => openCv(r.resume_url)}
                    className="bg-navy-900 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white hover:bg-navy-700"
                  >
                    Download CV
                  </button>
                  <select
                    className={selectCls}
                    value={r.application_status}
                    onChange={(e) => setStatus(r.id, e.target.value)}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s.replace("_", " ")}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </details>
        ))}
        {!rows.length && (
          <p className="border border-navy-900/10 bg-white px-4 py-8 text-center text-ink/50">
            No applications yet.
          </p>
        )}
      </div>
    </div>
  );
}
