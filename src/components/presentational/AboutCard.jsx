const AboutCard = ({ item }) => {
  const isProfileCard = Boolean(item.profileImageSrc);

  return (
    <div className="about-me-item">
      <div className="about-me-item-title">{item.title}</div>

      {isProfileCard ? (
        <img className="profile-image" src={item.profileImageSrc} alt={item.title} />
      ) : (
        <div className="about-me-item-img">
          <img src={item.imageSrc} alt={item.title} />
        </div>
      )}

      <p>{item.body}</p>

      {isProfileCard ? (
        <div>
          <div className="resume-container">
            <a id="resume" target="_newtab" href={item.resumeHref}>
              RESUME
            </a>
          </div>
          <div className="contact-container">
            {item.contacts.map((contact) => (
              <a key={contact.href} target="_newtab" href={contact.href} aria-label={contact.label}>
                <img className="contact-icon" src={contact.iconSrc} alt={contact.label} />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AboutCard;
