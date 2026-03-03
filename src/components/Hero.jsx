export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__label">Director of Engineering</span>
          <h1 className="hero__title">
            I build products<br />
            and the teams<br />
            behind them.
          </h1>
          <p className="hero__description">
            Player-coach engineering leader with 10+ years shipping B2B SaaS.
            I lead teams, write production code, and bring product thinking
            rooted in lean startup methodology to every decision.
          </p>
          <div className="hero__cta">
            <a
              className="btn btn--primary"
              href="https://linkedin.com/in/matiasmeneses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              className="btn btn--secondary"
              href="mailto:matiasameneses@gmail.com"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
