const HomeSection = ({ backgroundPositionY, typedOutDone }) => {
  return (
    <section
      id="home"
      data-type="background"
      data-speed="10"
      style={{ backgroundPosition: `50% ${backgroundPositionY}px` }}
    >
      <div className="home-header">
        <div
          style={
            typedOutDone
              ? {
                  borderRight: ".15em solid transparent",
                  animation: "none",
                  width: "100%",
                }
              : undefined
          }
        >
          Builder • Mentor • Software Engineer
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
