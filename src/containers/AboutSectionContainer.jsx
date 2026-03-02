import { useMemo } from "react";
import AboutSection from "../components/presentational/AboutSection.jsx";

const AboutSectionContainer = ({ backgroundPositionY, showTitle }) => {
  const items = useMemo(
    () => [
      {
        title: "Code",
        imageSrc: "./img/code.svg",
        body: "Ensuring code is abstracted, readable, and tested. Striving for perfection and attention to detail lead to sustainable code bases. Agreed upon naming conventions and reusable components help with speed and quality of development.",
      },
      {
        title: "Team",
        imageSrc: "./img/team.svg",
        body: "Working as a team is vital to the success of a product. By leading with empathy and exercising compromise, I have excelled at working with Product, Design and fellow engineers in delivering exceptional work.",
      },
      {
        title: "Design",
        imageSrc: "./img/design.svg",
        body: "Being as close as possible to the end user helps to solve the underlying problem and guide implementation. Great designers and product visionaries are needed, but understanding the end goal can lead to superior code.",
      },
      {
        title: "Organization",
        imageSrc: "./img/organization.svg",
        body: "It all starts with empathy and connecting with peers. From Stand up to running Sprint Retrospectives I have experience bringing people together, iterating on process, and improving workflow.",
      },
      {
        title: "Growth",
        imageSrc: "./img/growth.svg",
        body: "I appreciate that Software Engineering is a disipline that involves constant evolving and learning. I find the best mechanisim for deep learning is through sharing knowledge with those around me.",
      },
      {
        title: "Matias Meneses",
        profileImageSrc: "./img/thumb_matias.jpg",
        body: "I love to build interesting things and learn new technologies. When im not nose deep reviewing or writing code I am outdoors, hiking, and spending time with friends and family.",
        resumeHref: "img/Matias_Meneses_Resume.pdf",
        contacts: [
          {
            href: "mailto:matiasameneses@gmail.com",
            iconSrc: "img/email_icon.png",
            label: "Email",
          },
          {
            href: "https://www.facebook.com/matias.meneses.79",
            iconSrc: "img/facebook_icon.png",
            label: "Facebook",
          },
          {
            href: "https://www.linkedin.com/in/matiasmeneses",
            iconSrc: "img/linkedin_icon.png",
            label: "LinkedIn",
          },
          {
            href: "https://twitter.com/MatiasAMeneses",
            iconSrc: "img/twitter_icon.png",
            label: "Twitter",
          },
        ],
      },
    ],
    []
  );

  return (
    <AboutSection
      backgroundPositionY={backgroundPositionY}
      showTitle={showTitle}
      items={items}
    />
  );
};

export default AboutSectionContainer;
