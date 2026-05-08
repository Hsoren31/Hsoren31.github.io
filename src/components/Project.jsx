import githubLogo from "../assets/github.svg";
import viewLiveIcon from "../assets/view-live.svg";

export default function Project({
  imgSrc,
  imgAlt,
  title,
  languages,
  description,
  githubLink,
  liveLink,
}) {
  return (
    <div className="project">
      <div className="frame">
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} />
        ) : (
          <div className="empty_img"></div>
        )}
      </div>
      <div className="details">
        <h3>{title}</h3>
        <ul className="languages">
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <p>{description}</p>
        <div className="links">
          {githubLink && (
            <a href={githubLink}>
              GitHub
              <img src={githubLogo} alt="Github Logo" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink}>
              Live Preview
              <img src={viewLiveIcon} alt="View Live" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
