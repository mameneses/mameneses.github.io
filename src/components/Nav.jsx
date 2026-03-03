import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <span
          className="nav__name"
          onClick={() => scrollTo("hero")}
          style={{ cursor: "pointer" }}
        >
          Matias Meneses
        </span>
        <ul className="nav__links">
          <li className="nav__link" onClick={() => scrollTo("pillars")}>
            What I Bring
          </li>
          <li className="nav__link" onClick={() => scrollTo("experience")}>
            Experience
          </li>
          <li className="nav__link" onClick={() => scrollTo("about")}>
            About
          </li>
          <li className="nav__link" onClick={() => scrollTo("contact")}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
