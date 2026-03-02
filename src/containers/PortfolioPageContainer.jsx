import { useCallback, useEffect, useState } from "react";
import HomeSection from "../components/presentational/HomeSection.jsx";
import PortfolioNav from "../components/presentational/PortfolioNav.jsx";
import AboutSectionContainer from "./AboutSectionContainer.jsx";
import ProjectsSectionContainer from "./ProjectsSectionContainer.jsx";

const HOME_TITLE = "Matias Meneses";
const ABOUT_TITLE = "About Me";
const WORK_TITLE = "Work";

const PARALLAX_SPEED = 10;

const PortfolioPageContainer = () => {
  const [navTitle, setNavTitle] = useState(HOME_TITLE);
  const [showAboutTitle, setShowAboutTitle] = useState(true);
  const [showWorkTitle, setShowWorkTitle] = useState(true);
  const [typedOutDone, setTypedOutDone] = useState(false);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTypedOutDone(true);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateFromScroll = () => {
      const currentScroll = window.scrollY;
      setBackgroundPositionY(-(currentScroll / PARALLAX_SPEED));

      if (currentScroll <= 940) {
        setNavTitle(HOME_TITLE);
      } else if (currentScroll < 1940) {
        setNavTitle(ABOUT_TITLE);
      } else {
        setNavTitle(WORK_TITLE);
      }

      setShowAboutTitle(currentScroll < 1000);
      setShowWorkTitle(currentScroll < 2000);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navigateToSection = useCallback((sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) {
      return;
    }

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <PortfolioNav navTitle={navTitle} onNavigate={navigateToSection} />
      <HomeSection
        backgroundPositionY={backgroundPositionY}
        typedOutDone={typedOutDone}
      />
      <AboutSectionContainer
        backgroundPositionY={backgroundPositionY}
        showTitle={showAboutTitle}
      />
      <ProjectsSectionContainer
        backgroundPositionY={backgroundPositionY}
        showTitle={showWorkTitle}
      />
    </>
  );
};

export default PortfolioPageContainer;
