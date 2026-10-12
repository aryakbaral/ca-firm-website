import Link from "next/link";

export function Button({ href, variant = "primary", size = "md", children, className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600";
  const sizes = {
    md: "px-6 py-3 text-[11px] tracking-[0.22em]",
    sm: "px-4 py-2.5 text-[10px] tracking-[0.2em]",
  };
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-700 shadow-sm",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm",
    outline: "border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
    light: "border border-white/30 text-white hover:bg-white hover:text-navy-900",
  };
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, onDark = false }) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.3em] ${
        onDark ? "text-gold-400" : "text-gold-700"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, onDark = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 h-px w-16 bg-gold-500 ${center ? "mx-auto" : ""}`} />
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-white/75" : "text-ink/70"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function ComingSoon({ step, title, intro, items = [] }) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="ledger-grid-light absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
        <Eyebrow>{`Step ${step} of 13 · In preparation`}</Eyebrow>
        <h1 className="mt-5 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">{title}</h1>
        <div className="mt-6 h-px w-24 bg-gold-500" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{intro}</p>
        {items.length > 0 && (
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-gold-500/70 bg-white px-4 py-3 text-sm text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/consultation">Request a Consultation</Button>
          <Button href="/contact" variant="outline">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
