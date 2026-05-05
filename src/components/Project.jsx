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
      <h3>{title}</h3>
      <ul className="languages">
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <p>{description}</p>
      {githubLink && <a href={githubLink}>GitHub Repository</a>}
      {liveLink && <a href={liveLink}>Live Preview</a>}
    </div>
  );
}
