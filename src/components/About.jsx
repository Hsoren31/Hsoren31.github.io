import "../styles/about.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-column">
        <h2>A little about me</h2>
        <p>
          I taught myself web development, and I stuck with it because I love
          the moment when a blank page turns into something people can use. I
          build the whole thing, from the database to the buttons.
        </p>
        <p>
          I'm looking for my first developer role on a team where I can keep
          learning and help create something great.
        </p>
      </div>
      <ul>
        <li>
          <h3>One feature at a time</h3>
          <p>
            I break big problems into small tasks and finish the one in front of
            me before looking ahead
          </p>
        </li>
        <li>
          <h3>Step back, then zoom in</h3>
          <p>
            I check that the pieces still fit together, then dig into the
            details
          </p>
        </li>
        <li>
          <h3>Simple on purpose</h3>
          <p>I aim for interfaces that are clean, friendly, and easy to use.</p>
        </li>
      </ul>
    </section>
  );
}
