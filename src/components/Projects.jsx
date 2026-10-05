import projects from "../../data/projects.js";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  return (
    <div id="projects">
      <div className="heading">
        <h2>Things I've built</h2>
        <p>All three are deployed and running. Open one and click around.</p>
      </div>
      <ul>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </ul>
    </div>
  );
}
