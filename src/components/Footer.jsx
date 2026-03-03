export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <h3>Let's connect</h3>
            <p>Open to Director of Engineering and Head of Engineering roles.</p>
          </div>
          <div className="footer__links">
            <a
              className="footer__link"
              href="mailto:matiasameneses@gmail.com"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              matiasameneses@gmail.com
            </a>
            <a
              className="footer__link"
              href="https://linkedin.com/in/matiasmeneses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Matias Meneses
        </p>
      </div>
    </footer>
  );
}
