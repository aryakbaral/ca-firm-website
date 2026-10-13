"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

const inputCls =
  "w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold-600 focus:outline-none focus:ring-1 focus:ring-gold-600";
const labelCls = "block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60";
const errCls = "mt-1 text-xs text-[#b3261e]";
const MAX_MB = 5;
const ALLOWED = [".pdf", ".doc", ".docx"];

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ApplicationForm({ initialJob = "" }) {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  const positionOptions = [
    ...jobs.map((j) => j.title),
    "Internship programme",
    "Graduate trainee programme",
    "Speculative application",
  ];

  function validate(fd, file) {
    const e = {};
    if (!fd.get("full_name")?.toString().trim()) e.full_name = "Please enter your full name.";
    const email = fd.get("email")?.toString().trim() || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!fd.get("phone")?.toString().trim()) e.phone = "Please enter a phone number.";
    if (!fd.get("position_applied_for")) e.position = "Please choose a position.";
    if (!file) {
      e.resume = "Please upload your CV (PDF, DOC or DOCX).";
    } else {
      const ext = "." + file.name.split(".").pop().toLowerCase();
      if (!ALLOWED.includes(ext)) e.resume = "Only PDF, DOC or DOCX files are accepted.";
      else if (file.size > MAX_MB * 1024 * 1024) e.resume = "Maximum file size is 5 MB.";
    }
    if (!fd.get("consent")) e.consent = "We need your consent to process your application.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    if (fd.get("company_website")) return; // honeypot
    const file = fd.get("resume") && fd.get("resume").size ? fd.get("resume") : null;
    const e = validate(fd, file);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!supabase) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    /* 1 — Upload the CV into the PRIVATE resumes bucket.
       Naming convention: applicant-position-timestamp.ext */
    const ext = file.name.split(".").pop().toLowerCase();
    const path = `${slugify(String(fd.get("full_name")))}-${slugify(
      String(fd.get("position_applied_for"))
    )}-${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(path, file, { upsert: false, contentType: file.type });

    if (uploadError) {
      setStatus("error");
      return;
    }

    /* 2 — Insert the application row (resume_url stores the private path). */
    const { error } = await supabase.from("job_applications").insert({
      full_name: String(fd.get("full_name")).trim(),
      email: String(fd.get("email")).trim(),
      phone: String(fd.get("phone")).trim(),
      position_applied_for: String(fd.get("position_applied_for")),
      current_employer: String(fd.get("current_employer") || "").trim() || null,
      years_of_experience: String(fd.get("years_of_experience") || "").trim() || null,
      highest_qualification: String(fd.get("highest_qualification") || "").trim() || null,
      professional_qualification: String(fd.get("professional_qualification") || "").trim() || null,
      expected_salary: String(fd.get("expected_salary") || "").trim() || null,
      notice_period: String(fd.get("notice_period") || "").trim() || null,
      cover_letter: String(fd.get("cover_letter") || "").trim() || null,
      resume_url: path,
      linkedin_url: String(fd.get("linkedin_url") || "").trim() || null,
      consent_given: true,
      application_status: "received",
    });

    if (error) {
      setStatus("error");
      return;
    }
    router.push("/thank-you/application");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t-2 border-gold-500 bg-white p-7 sm:p-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
        Application form
      </p>

      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className={labelCls}>Full name *</label>
          <input id="full_name" name="full_name" type="text" className={`${inputCls} mt-2`} placeholder="Your name" />
          {errors.full_name && <p className={errCls}>{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email address *</label>
          <input id="email" name="email" type="email" className={`${inputCls} mt-2`} placeholder="you@example.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone number *</label>
          <input id="phone" name="phone" type="tel" className={`${inputCls} mt-2`} placeholder="+977 …" />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="position_applied_for" className={labelCls}>Position applied for *</label>
          <select
            id="position_applied_for"
            name="position_applied_for"
            className={`${inputCls} mt-2`}
            defaultValue={initialJob || positionOptions[0]}
          >
            {positionOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {errors.position && <p className={errCls}>{errors.position}</p>}
        </div>
        <div>
          <label htmlFor="current_employer" className={labelCls}>Current employer (optional)</label>
          <input id="current_employer" name="current_employer" type="text" className={`${inputCls} mt-2`} />
        </div>
        <div>
          <label htmlFor="years_of_experience" className={labelCls}>Years of experience</label>
          <input id="years_of_experience" name="years_of_experience" type="text" className={`${inputCls} mt-2`} placeholder="e.g. 3" />
        </div>
        <div>
          <label htmlFor="highest_qualification" className={labelCls}>Highest qualification</label>
          <input id="highest_qualification" name="highest_qualification" type="text" className={`${inputCls} mt-2`} placeholder="e.g. MBS, BBS" />
        </div>
        <div>
          <label htmlFor="professional_qualification" className={labelCls}>Professional qualification</label>
          <input id="professional_qualification" name="professional_qualification" type="text" className={`${inputCls} mt-2`} placeholder="e.g. CA, ACCA, CPA, CFA" />
        </div>
        <div>
          <label htmlFor="expected_salary" className={labelCls}>Expected salary (optional)</label>
          <input id="expected_salary" name="expected_salary" type="text" className={`${inputCls} mt-2`} placeholder="Monthly, NPR" />
        </div>
        <div>
          <label htmlFor="notice_period" className={labelCls}>Notice period</label>
          <input id="notice_period" name="notice_period" type="text" className={`${inputCls} mt-2`} placeholder="e.g. 30 days / immediate" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cover_letter" className={labelCls}>Cover letter</label>
          <textarea id="cover_letter" name="cover_letter" rows={5} className={`${inputCls} mt-2`} placeholder="A page is plenty. Tell us what you care about in this work." />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="resume" className={labelCls}>Resume / CV * (PDF, DOC, DOCX · max 5 MB)</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            className="mt-2 w-full border border-navy-900/20 bg-white px-4 py-2.5 text-sm text-ink file:mr-4 file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:font-mono file:text-[10px] file:uppercase file:tracking-[0.18em] file:text-white focus:border-gold-600 focus:outline-none"
          />
          {fileName && (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-forest-700">
              Attached: {fileName}
            </p>
          )}
          {errors.resume && <p className={errCls}>{errors.resume}</p>}
        </div>
        <div>
          <label htmlFor="linkedin_url" className={labelCls}>LinkedIn profile (optional)</label>
          <input id="linkedin_url" name="linkedin_url" type="url" className={`${inputCls} mt-2`} placeholder="https://…" />
        </div>
        <div>
          <label htmlFor="portfolio_url" className={labelCls}>Portfolio / website (optional)</label>
          <input id="portfolio_url" name="portfolio_url" type="url" className={`${inputCls} mt-2`} placeholder="https://…" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#a8893f]" />
            <span>
              I consent to Baral &amp; K.C. Associates processing my personal data for
              recruitment purposes, as described in the{" "}
              <a href="/legal/recruitment-privacy-notice" className="underline decoration-gold-500 underline-offset-4 hover:text-gold-700">
                Recruitment Privacy Notice
              </a>
              . *
            </span>
          </label>
          {errors.consent && <p className={errCls}>{errors.consent}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex items-center justify-center bg-navy-900 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit application"}
      </button>

      {status === "error" && (
        <div className="mt-6 border border-[#b3261e]/40 bg-[#b3261e]/10 p-4 text-sm leading-relaxed text-[#b3261e]">
          Something went wrong submitting your application. Please try again, or email your CV to{" "}
          {site.email}.
        </div>
      )}
    </form>
  );
}
