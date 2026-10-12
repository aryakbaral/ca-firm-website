import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-gold-600/60 bg-navy-900 font-display text-sm text-gold-300">
              {site.monogram}
            </span>
            <span>
              <span className="block font-display text-lg leading-tight">{site.name}</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-white/50">
                {site.descriptor}
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Every engagement is conducted under strict confidentiality, professional independence
            and the ethical standards of the Institute of Chartered Accountants of Nepal (ICAN).
          </p>
        </div>

        <nav aria-label="Services">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {site.services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/75 transition-colors hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Firm">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">Firm</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/about" className="text-white/75 hover:text-gold-300">About Us</Link></li>
            <li><Link href="/industries" className="text-white/75 hover:text-gold-300">Industries</Link></li>
            <li><Link href="/insights" className="text-white/75 hover:text-gold-300">Insights</Link></li>
            <li><Link href="/careers" className="text-white/75 hover:text-gold-300">Careers</Link></li>
            <li><Link href="/contact" className="text-white/75 hover:text-gold-300">Contact Us</Link></li>
            <li><Link href="/consultation" className="text-white/75 hover:text-gold-300">Request Consultation</Link></li>
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-400">Contact</p>
          <address className="mt-5 space-y-3 text-sm not-italic text-white/75">
            <p>
              {site.name}
              <br />
              {site.address}
            </p>
            <p>
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold-300">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </p>
            <p className="text-white/55">{site.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {year} {site.name} · {site.descriptor}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-gold-300">Privacy Policy</Link>
            <Link href="/legal/terms-of-use" className="hover:text-gold-300">Terms of Use</Link>
            <Link href="/legal/disclaimer" className="hover:text-gold-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
