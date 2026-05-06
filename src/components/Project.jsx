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
          {githubLink && <a href={githubLink}>GitHub Repository</a>}
          {liveLink && <a href={liveLink}>Live Preview</a>}
        </div>
      </div>
    </div>
  );
}
