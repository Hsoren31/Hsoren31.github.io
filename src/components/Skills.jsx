import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2>What I work with</h2>
      <div>
        <strong>Front end</strong>
        <ul>
          {skills.frontend.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Back end</strong>
        <ul>
          {skills.backend.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Data and Tools</strong>
        <ul>
          {skills.dataAndTools.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
