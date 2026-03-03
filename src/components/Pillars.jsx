const PILLARS = [
  {
    icon: "\u2318",
    title: "Technical Leadership",
    text: "Player-coach who leads architecture decisions and writes production code. Deep frontend expertise in React and JavaScript, with a track record of building and scaling complex B2B applications.",
  },
  {
    icon: "\u25B3",
    title: "Product Thinking",
    text: "A decade of building tools for lean startup practitioners taught me hypothesis-driven prioritization. I know when to build, when to iterate, and when not to build at all.",
  },
  {
    icon: "\u25CB",
    title: "Product Ownership",
    text: "Experienced owning the product roadmap end-to-end \u2014 from stakeholder alignment and cross-functional coordination to defining what ships and what doesn\u2019t.",
  },
  {
    icon: "\u2261",
    title: "Team Building",
    text: "Built and coached engineering teams through growth and restructuring. I create environments where engineers do their best work \u2014 clear goals, fast feedback, room to own outcomes.",
  },
  {
    icon: "\u2726",
    title: "AI Integration",
    text: "Building AI-powered workflows into real products \u2014 not demos. Focused on practical applications that create measurable value for users and teams.",
  },
];

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <div className="pillars__header">
          <p className="section-label">What I Bring</p>
          <h2 className="section-title">Engineering leadership with product depth</h2>
          <p className="section-subtitle">
            The rare combination of hands-on technical execution and strategic product thinking.
          </p>
        </div>
        <div className="pillars__grid">
          {PILLARS.map((pillar) => (
            <div className="pillar-card" key={pillar.title}>
              <div className="pillar-card__icon">{pillar.icon}</div>
              <h3 className="pillar-card__title">{pillar.title}</h3>
              <p className="pillar-card__text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
