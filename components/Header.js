"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Button } from "@/components/ui";

function navClass(active) {
  return `relative py-1 text-sm font-semibold tracking-wide transition-colors ${
    active
      ? "text-navy-900 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-gold-500"
      : "text-ink/70 hover:text-navy-900"
  }`;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy-950 text-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.18em] sm:px-10">
           <p className="truncate">
            {site.descriptor} | Audit · Tax · Advisory | {site.city}
          </p>
          <div className="hidden gap-6 sm:flex">
            <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-gold-300">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-navy-900/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold-600/60 bg-navy-900 font-display text-sm text-gold-300">
              {site.monogram}
            </span>
            <span>
              <span className="block font-display text-lg leading-tight text-navy-900">
                {site.name}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-ink/55">
                {site.descriptor}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {site.nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`${navClass(pathname.startsWith("/services"))} flex items-center gap-1.5`}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                      <div className="w-[36rem] border border-navy-900/10 bg-white shadow-2xl shadow-navy-900/10">
                        <div className="grid grid-cols-2">
                          {site.services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="group border-b border-r border-navy-900/5 px-5 py-4 transition-colors hover:bg-paper"
                            >
                              <p className="font-display text-base text-navy-900 transition-colors group-hover:text-gold-700">
                                {s.title}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-ink/60">{s.blurb}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="flex items-center justify-between bg-navy-900 px-5 py-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                            Six practices, one standard of care
                          </p>
                          <Link
                            href="/services"
                            className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-300 transition-colors hover:text-gold-200"
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={navClass(pathname === item.href)}>
                  {item.label}
                </Link>
              )
            )}
            <Button href="/consultation" variant="gold" size="sm">
              Request a Consultation
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center border border-navy-900/15 text-navy-900 lg:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 4h16M1 9h16M1 14h16" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-navy-900/10 bg-paper lg:hidden">
            <div className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
              <ul className="divide-y divide-navy-900/10">
                {site.nav.map((item) => (
                  <li key={item.href} className="py-3">
                    <Link href={item.href} className="font-display text-lg text-navy-900">
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mt-2 grid gap-2 border-l-2 border-gold-500/60 pl-4">
                        {site.services.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="text-sm text-ink/70">
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3 pb-2">
                <Button href="/consultation" variant="gold">
                  Request a Consultation
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
