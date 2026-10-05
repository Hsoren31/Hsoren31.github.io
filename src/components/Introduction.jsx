import projects from "../../data/projects";
import skills from "../../data/skills";

export default function Introduction() {
  return (
    <section id="introduction">
      <h1>
        Hi, I'm Haley. I build web apps from a <u>blank page</u>.
      </h1>
      <p>
        I'm a self-taught full stack developer. I got into web development by
        coincidence and fell in love with taking an idea from nothing to a
        deployed app. I like simple, good-looking interfaces backed by solid
        APIs.
      </p>
      <a href="#projects">See my projects</a>
      <a href="#contact">Say hello</a>
      <div id="webpage">
        <div className="title-bar">
          <p>about-me</p>
        </div>
      </div>
      <div id="heading">
        <div>Profile Picture</div>
        <div className="sidebar">
          <h3>Haley Sorensen</h3>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
      <div id="projects">
        <ul>
          {projects.map((project) => (
            <li>
              <strong>{project.title}</strong>
              <a href={project.liveLink}>live</a>
            </li>
          ))}
        </ul>
      </div>
      <div id="teck-stack">
        <ul>
          {skills.core.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
