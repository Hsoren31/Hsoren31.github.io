export default function ProjectItem({ project }) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <ul className="project-description">
        {project.description.map((line) => (
          <p>{line}</p>
        ))}
      </ul>
      <ul className="tech-stack">
        {project.techStack.map((tech) => (
          <p>{tech}</p>
        ))}
      </ul>
      <div className="links">
        <a className="project-link project-live" href={project.liveLink}>
          Live Demo
        </a>
        <a className="project-link " href={project.githubLink}>
          View Code
        </a>
      </div>
      <img src={project.imgUrl} />
    </div>
  );
}
