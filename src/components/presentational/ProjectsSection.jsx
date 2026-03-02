const ProjectsSection = ({
  backgroundPositionY,
  showTitle,
  projects,
  projectIndex,
  onPrevious,
  onNext,
}) => {
  return (
    <section
      id="projects"
      data-type="background"
      data-speed="10"
      style={{ backgroundPosition: `50% ${backgroundPositionY}px` }}
    >
      {showTitle ? <div className="work-title">Work</div> : null}

      <div className="workspace-outer-container">
        <div id="prev" className="next-arrow left" onClick={onPrevious}>
          <img src="./img/arrow.svg" alt="Previous project" />
        </div>
        <div id="next" className="next-arrow right" onClick={onNext}>
          <img src="./img/arrow.svg" alt="Next project" />
        </div>

        <div className="projects-main-container">
          <div
            className="projects-scroll-container"
            style={{
              width: `${projects.length * 550}px`,
              transform: `translateX(-${projectIndex * 550}px)`,
              transition: "transform 300ms ease",
            }}
          >
            {projects.map((project) => (
              <div className="project-container" key={project.title}>
                <div className="ind-project-title">{project.title}</div>
                <div className="proj-desc">{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
