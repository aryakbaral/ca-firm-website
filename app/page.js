const phases = [
  { no: "01", name: "Foundation & deployment", status: "LIVE", live: true },
  { no: "02", name: "Design system & site shell", status: "NEXT", live: false },
  { no: "03", name: "Pages · services · industries", status: "PLANNED", live: false },
  { no: "04", name: "Supabase forms & admin dashboard", status: "PLANNED", live: false },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-navy-950 text-white">
      {/* Ambient background layers */}
      <div aria-hidden="true" className="ledger-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-48 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-[-30%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-navy-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
        {/* Top bar */}
        <header className="animate-rise flex items-center justify-between border-b border-white/10 py-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center border border-gold-500/50 bg-navy-900 font-display text-sm text-gold-400">
              SG
            </div>
            <div>
              <p className="font-display text-base tracking-wide text-white">Sterling &amp; Grant</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                Chartered Accountants
              </p>
            </div>
          </div>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 md:block">
            Est. 2009 · Audit · Tax · Advisory
          </p>
        </header>

        {/* Statement */}
        <section className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <p
            className="animate-rise font-mono text-[11px] uppercase tracking-[0.3em] text-gold-400"
            style={{ animationDelay: "120ms" }}
          >
            Trusted audit, tax &amp; advisory services
          </p>
          <h1
            className="animate-rise mt-6 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "220ms" }}
          >
            Clarity in every figure. <em className="italic text-gold-400">Confidence</em> in
            every decision.
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            The new digital home of Sterling &amp; Grant is under construction. Our partners
            and teams remain fully available by phone and email throughout the build.
          </p>
        </section>

        {/* Build status ledger + contact */}
        <section className="grid gap-10 border-t border-white/10 py-12 md:grid-cols-[1.4fr_1fr]">
          <div className="animate-rise" style={{ animationDelay: "420ms" }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Website build ledger
            </p>
            <ul className="mt-4">
              {phases.map((p) => (
                <li
                  key={p.no}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3"
                >
                  <span className="font-mono text-xs text-gold-400/90">{p.no}</span>
                  <span className="flex-1 text-sm text-white/75">{p.name}</span>
                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] ${
                      p.live ? "text-gold-400" : "text-white/35"
                    }`}
                  >
                    {p.live ? "✓ " : ""}
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="animate-rise md:border-l md:border-white/10 md:pl-10"
            style={{ animationDelay: "520ms" }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Reach the firm
            </p>
            <a
              href="mailto:hello@sterlinggrant.example"
              className="mt-4 block font-display text-lg text-white underline decoration-gold-500/60 underline-offset-8 transition-colors hover:text-gold-300"
            >
              hello@sterlinggrant.example
            </a>
            <p className="mt-3 text-sm text-white/55">+00 000 000 000 · Mon–Fri, 8:30–17:30</p>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="animate-rise flex flex-col justify-between gap-2 border-t border-white/10 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 sm:flex-row"
          style={{ animationDelay: "620ms" }}
        >
          <p>© 2025 Sterling &amp; Grant · Chartered Accountants</p>
          <p>Phase 01 of 13 — Foundation deployed ✓</p>
        </footer>
      </div>
    </main>
  );
}
