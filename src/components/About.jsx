export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__photo-wrapper">
            <img
              className="about__photo"
              src="./img/thumb_matias.jpg"
              alt="Matias Meneses"
            />
          </div>
          <div className="about__text">
            <div>
              <p className="section-label">About</p>
              <h2 className="section-title">A bit more context</h2>
            </div>
            <p>
              I'm based in the <strong>SF Bay Area</strong>, where I've spent
              the last decade building software that helps people build better
              products. I'm <strong>bilingual in English and Spanish</strong>,
              which has shaped how I think about communication and
              collaboration across teams.
            </p>
            <p>
              Outside of work, I'm family-oriented and intentional about where
              I put my energy. I care about building things that matter — products
              that solve real problems, teams that do meaningful work, and
              a career that compounds over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
