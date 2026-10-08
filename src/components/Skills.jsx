import skills from "../../data/skills";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <h2>What I work with</h2>
      <div className="skills">
        <div className="skill-group">
          <strong>Front end</strong>
          <ul>
            {skills.frontend.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <strong>Back end</strong>
          <ul>
            {skills.backend.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <strong>Data and Tools</strong>
          <ul>
            {skills.dataAndTools.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
