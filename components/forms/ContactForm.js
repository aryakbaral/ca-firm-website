"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { site } from "@/lib/site";

const inputCls =
  "w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold-600 focus:outline-none focus:ring-1 focus:ring-gold-600";
const labelCls = "block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60";
const errCls = "mt-1 text-xs text-[#b3261e]";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errors, setErrors] = useState({});

  function validate(fd) {
    const e = {};
    if (!fd.get("full_name")?.toString().trim()) e.full_name = "Please enter your full name.";
    const email = fd.get("email")?.toString().trim() || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!fd.get("phone")?.toString().trim()) e.phone = "Please enter a phone number.";
    if (!fd.get("message")?.toString().trim()) e.message = "Please tell us briefly what you need.";
    if (!fd.get("consent")) e.consent = "We need your consent in order to respond.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    if (fd.get("company_website")) return; // honeypot: silently drop bots
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!supabase) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("contacts").insert({
      full_name: String(fd.get("full_name")).trim(),
      company_name: String(fd.get("company_name") || "").trim() || null,
      email: String(fd.get("email")).trim(),
      phone: String(fd.get("phone")).trim(),
      service_needed: String(fd.get("service_needed")),
      preferred_contact_method: String(fd.get("preferred_contact")),
      message: String(fd.get("message")).trim(),
      consent_given: true,
      status: "new",
    });

    if (error) {
      setStatus("error");
      return;
    }
    router.push("/thank-you/contact");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t-2 border-gold-500 bg-white p-7 sm:p-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
        Client enquiry form
      </p>

      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className={labelCls}>Full name *</label>
          <input id="full_name" name="full_name" type="text" className={`${inputCls} mt-2`} placeholder="Your name" />
          {errors.full_name && <p className={errCls}>{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="company_name" className={labelCls}>Company (optional)</label>
          <input id="company_name" name="company_name" type="text" className={`${inputCls} mt-2`} placeholder="Organisation name" />
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
        <div className="sm:col-span-2">
          <label htmlFor="service_needed" className={labelCls}>Service needed *</label>
          <select id="service_needed" name="service_needed" className={`${inputCls} mt-2`} defaultValue="Audit & Assurance">
            <option>Audit & Assurance</option>
            <option>Taxation</option>
            <option>Accounting & Bookkeeping</option>
            <option>Business Advisory & Consulting</option>
            <option>Corporate Services</option>
            <option>Payroll & HR Advisory</option>
            <option>Other</option>
          </select>
        </div>
        <fieldset className="sm:col-span-2">
          <legend className={labelCls}>Preferred contact method</legend>
          <div className="mt-3 flex flex-wrap gap-6">
            {["Email", "Phone call", "WhatsApp"].map((m, i) => (
              <label key={m} className="flex items-center gap-2 text-sm text-ink/80">
                <input type="radio" name="preferred_contact" value={m} defaultChecked={i === 0} className="h-4 w-4 accent-[#a8893f]" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>Message *</label>
          <textarea id="message" name="message" rows={5} className={`${inputCls} mt-2`} placeholder="Briefly describe what you need — we read every word." />
          {errors.message && <p className={errCls}>{errors.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#a8893f]" />
            <span>
              I consent to Baral &amp; K.C. Associates storing these details to respond to my
              enquiry, as described in the{" "}
              <a href="/legal/privacy-policy" className="underline decoration-gold-500 underline-offset-4 hover:text-gold-700">
                Privacy Policy
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
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <div className="mt-6 border border-[#b3261e]/40 bg-[#b3261e]/10 p-4 text-sm leading-relaxed text-[#b3261e]">
          Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
          {site.email}.
        </div>
      )}
    </form>
  );
}
