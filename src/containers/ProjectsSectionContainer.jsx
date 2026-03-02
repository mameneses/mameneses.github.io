import { useCallback, useMemo, useState } from "react";
import ProjectsSection from "../components/presentational/ProjectsSection.jsx";

const ProjectsSectionContainer = ({ backgroundPositionY, showTitle }) => {
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = useMemo(
    () => [
      {
        title: "Product Engineering Leadership",
        description:
          "Hands-on leadership across discovery, delivery, and operations. I align Product, Design, and Engineering to ship high-quality customer outcomes.",
      },
      {
        title: "Frontend Architecture and Scale",
        description:
          "Building resilient React applications with maintainable patterns, testable components, and reliable deployment workflows.",
      },
      {
        title: "Mentorship and Team Growth",
        description:
          "Coaching engineers through design reviews, pairing, and practical feedback loops to improve both quality and confidence.",
      },
    ],
    []
  );

  const goToPreviousProject = useCallback(() => {
    setProjectIndex((currentIndex) => {
      if (currentIndex === 0) {
        return projects.length - 1;
      }

      return currentIndex - 1;
    });
  }, [projects.length]);

  const goToNextProject = useCallback(() => {
    setProjectIndex((currentIndex) => {
      if (currentIndex === projects.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }, [projects.length]);

  return (
    <ProjectsSection
      backgroundPositionY={backgroundPositionY}
      showTitle={showTitle}
      projects={projects}
      projectIndex={projectIndex}
      onPrevious={goToPreviousProject}
      onNext={goToNextProject}
    />
  );
};

export default ProjectsSectionContainer;
