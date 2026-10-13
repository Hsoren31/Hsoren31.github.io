import projects from "../../data/projects";
import skills from "../../data/skills";
import "../styles/introduction.css";

export default function Introduction() {
  return (
    <section id="introduction">
      <div className="column">
        <h1>
          Hi, I'm Haley. I build web apps from a{" "}
          <u className="underline-highlight">blank page</u>.
        </h1>
        <p>
          I'm a self-taught full stack developer. I got into web development by
          coincidence and fell in love with taking an idea from nothing to a
          deployed app. I like simple, good-looking interfaces backed by solid
          APIs.
        </p>
        <div className="links">
          <a className="projects navigation pill-link" href="#projects">
            See my projects
          </a>
          <a className="contact navigation pill-link" href="#contact">
            Say hello
          </a>
        </div>
      </div>
      <div id="webpage">
        <div className="title-bar">
          <p>about-me</p>
        </div>
        <div className="webpage-content">
          <div id="heading">
            <div id="profile-picture"></div>
            <div className="sidebar">
              <h3>Haley Sorensen</h3>
              <p>Full Stack Web Developer</p>
            </div>
          </div>
          <div id="webpage-projects">
            <ul>
              {projects.map((project) => (
                <li>
                  <strong>{project.title}</strong>
                  <p className="webpage-live">live</p>
                </li>
              ))}
            </ul>
          </div>
          <div id="tech-stack">
            <ul>
              {skills.core.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
