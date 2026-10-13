"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const tabs = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/leads", label: "Leads & consultations" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/subscribers", label: "Subscribers" },
];

export default function AdminShell({ active, title, children }) {
  const [session, setSession] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setSession(null);
      return;
    }
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signIn(ev) {
    ev.preventDefault();
    setSigningIn(true);
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSigningIn(false);
    if (error) setAuthError("Invalid credentials.");
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  if (session === undefined) {
    return (
      <p className="py-24 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
        Checking credentials…
      </p>
    );
  }

  if (!session) {
    return (
      <section className="mx-auto max-w-md px-6 py-24">
        <form onSubmit={signIn} className="border-t-2 border-gold-500 bg-white p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
            Firm administration
          </p>
          <h1 className="mt-3 font-display text-2xl text-navy-900">Sign in</h1>
          <label className="mt-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="mt-2 w-full border border-navy-900/20 px-4 py-3 text-sm focus:border-gold-600 focus:outline-none"
          />
          <label className="mt-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            className="mt-2 w-full border border-navy-900/20 px-4 py-3 text-sm focus:border-gold-600 focus:outline-none"
          />
          {authError && <p className="mt-3 text-xs text-[#b3261e]">{authError}</p>}
          <button
            type="submit"
            disabled={signingIn}
            className="mt-6 w-full bg-navy-900 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white hover:bg-navy-700 disabled:opacity-60"
          >
            {signingIn ? "Signing in…" : "Sign in"}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-ink/55">
            Access is limited to authorised firm personnel. Public sign-up is disabled.
          </p>
        </form>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-700">
            Firm administration
          </p>
          <h1 className="mt-2 font-display text-3xl text-navy-900">{title}</h1>
        </div>
        <button
          onClick={signOut}
          className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
        >
          Sign out
        </button>
      </div>
      <nav className="mt-8 flex flex-wrap gap-2 border-b border-navy-900/10 pb-4">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
              active === t.label
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-900/20 text-ink/60 hover:border-navy-900 hover:text-navy-900"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8">{children}</div>
    </section>
  );
}
