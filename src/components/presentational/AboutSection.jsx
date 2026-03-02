import AboutCard from "./AboutCard.jsx";

const AboutSection = ({ backgroundPositionY, showTitle, items }) => {
  return (
    <section
      id="about"
      data-type="background"
      data-speed="10"
      style={{ backgroundPosition: `50% ${backgroundPositionY}px` }}
    >
      {showTitle ? <div className="about-title">About Me</div> : null}
      <div className="about-container">
        <div className="row">
          {items.map((item) => (
            <AboutCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
