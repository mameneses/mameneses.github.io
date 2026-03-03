const HIGHLIGHTS = [
  "Grew from engineer to Director of Engineering over a 10-year tenure, leading through multiple org restructurings",
  "Served simultaneously as sole frontend IC, product owner, and engineering lead in a lean 4-person team",
  "Built and maintained the core React application serving thousands of entrepreneurs and product teams",
  "Worked directly with founders and lean startup practitioners, deeply understanding the build-measure-learn loop from both sides",
  "Led product discovery and delivery cycles, owning roadmap prioritization and stakeholder alignment",
  "Integrated AI-powered workflows into the product to help teams make better decisions faster",
];

const TECH = [
  "React", "JavaScript", "TypeScript", "Node.js",
  "REST APIs", "GraphQL", "PostgreSQL", "Redis",
  "AWS", "CI/CD", "Agile", "Lean Methodology",
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've been building</h2>
        </div>
        <div className="experience__content">
          <div className="experience__main">
            <div>
              <div className="experience__role">
                <span className="experience__company">GLIDR</span>
                <span className="experience__title-role">
                  Director of Software Engineering
                </span>
                <span className="experience__duration">2015 — Present</span>
              </div>
              <p className="experience__description">
                B2B SaaS platform built for entrepreneurs and product teams
                practicing lean startup methodology. GLIDR helps teams run
                experiments, validate hypotheses, and make evidence-based
                product decisions.
              </p>
            </div>
            <ul className="experience__highlights">
              {HIGHLIGHTS.map((item, i) => (
                <li className="experience__highlight" key={i}>
                  <span className="experience__highlight-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience__sidebar">
            <p className="experience__sidebar-label">Technologies</p>
            <div className="experience__tech-list">
              {TECH.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
