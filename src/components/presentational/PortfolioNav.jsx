const PortfolioNav = ({ navTitle, onNavigate }) => {
  return (
    <nav>
      <span id="title">{navTitle}</span>
      <span>
        <ul>
          <li id="project-button" onClick={() => onNavigate("projects")}>
            Work
          </li>
          <li> | </li>
          <li id="about-button" onClick={() => onNavigate("about")}>
            About Me
          </li>
          <li> | </li>
          <li id="home-button" onClick={() => onNavigate("home")}>
            Home
          </li>
          <li></li>
        </ul>
      </span>
    </nav>
  );
};

export default PortfolioNav;
