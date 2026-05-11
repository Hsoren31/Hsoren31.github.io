import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import wheresWaldo from "./assets/wheres_waldo.png";
import inventoryApp from "./assets/inventory_app.png";
import shopStoreFake from "./assets/shopping_cart.png";
import membersOnly from "./assets/members_only.png";
import fileUploader from "./assets/file_uploader.png";
import battleship from "./assets/battleship.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="Home">
          <h1>
            Hi, I'm <span className="accent_color">Haley</span>
          </h1>
          <p>
            I'm a <span>full stack developer</span> with a strong interest in
            building modern web applications.
          </p>
          <p>Based in Salt Lake City, UT</p>
        </section>
        <section id="Projects">
          <h2>Projects</h2>
          <ul id="project_list">
            <Project
              imgSrc={wheresWaldo}
              imgAlt="Screenshot of Where's Waldo game screen."
              title="Where's Waldo"
              languages={[
                "React",
                "JavaScript",
                "NodeJS",
                "Prisma ORM",
                "Express",
              ]}
              description={
                "An interactive Where's Waldo game web app where users race against the clock to locate hidden characters within an image."
              }
              githubLink={"https://github.com/Hsoren31/where-s-waldo"}
              liveLink={"https://where-s-waldo-lime.vercel.app/"}
            />
            <Project
              imgSrc={inventoryApp}
              imgAlt={"Screenshot of the Inventory App home page."}
              title={"Inventory App"}
              languages={["Express", "NodeJS", "PostgreSQL", "EJS"]}
              description={
                "An Inventory Management web that allows users to manage categories and items for a fictional store of video game theme."
              }
              githubLink={"https://github.com/Hsoren31/inventory-app"}
              liveLink={"https://inventory-app-production-c7fd.up.railway.app/"}
            />
            <Project
              imgSrc={shopStoreFake}
              imgAlt={"Screenshot of Shop Store Fake home page."}
              title={"Shop Store Fake"}
              languages={["React", "React Router", "Jest"]}
              description={
                "A React-based mock shopping cart application that simulates a simple e-commerce experience."
              }
              githubLink={"https://github.com/Hsoren31/shopping-cart-app"}
              liveLink={"https://shopping-cart-app-delta-six.vercel.app/home"}
            />
            <Project
              imgSrc={membersOnly}
              imgAlt={"Screenshot of Members Only home page."}
              title={"Members Only"}
              languages={["NodeJS", "Passport", "PostgreSQL", "Express"]}
              description={
                "A members-only clubhouse web app where users can create anonymous posts, with authentication and role-based permissions allowing only members to see authors and admins to manage content."
              }
              githubLink={"https://membersonly-production-f8da.up.railway.app/"}
              liveLink={"https://membersonly-production-f8da.up.railway.app/"}
            />
            <Project
              imgSrc={fileUploader}
              imgAlt={"Screenshot of File Uploader Dashboard page."}
              title={"File Uploader"}
              languages={[
                "Prisma ORM",
                "Cloudinary",
                "Express",
                "Passport",
                "Multer",
              ]}
              description={
                "A simplified Google Drive-style cloud storage application that allows authenticated users to organize folders and upload files."
              }
              githubLink={"https://github.com/Hsoren31/file_uploader"}
            />
            <Project
              imgSrc={battleship}
              imgAlt={"Screenshot of Battleship game."}
              title={"Battleship"}
              languages={["JavaScript", "Webpack", "Jest"]}
              description={
                "A browser-based Battleship game where a player competes against a computer in a turn-based gameplay."
              }
              githubLink={"https://github.com/Hsoren31/battleship"}
              liveLink={"https://hsoren31.github.io/battleship/"}
            />
          </ul>
        </section>
        <section id="Skills">
          <h2>Skills</h2>
          <div id="skills_content">
            <div className="skills_group">
              <h3>Front-End</h3>
              <ul className="skills_list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skills_group">
              <h3>Back-End</h3>
              <ul className="skills_list">
                <li>NodeJS</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
            <div className="skills_group">
              <h3>Miscellaneous</h3>
              <ul className="skills_list">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="about-contact">
          <div id="About">
            <h2>About Me</h2>
            <p>
              I'm Haley Sorensen. A self-taught full-stack developer with a
              strong passion for building and learning. I build clean,
              user-friendly websites. I've developed my skills through hours of
              learning, experimenting, and building projects thanks to the Odin
              Project.
            </p>
            <p>
              I enjoy working on both front-end and back-end development. I'm
              driven by curiosity, and challenging myself to improve. I am
              currently looking for opportunities to gain real-world experience,
              collaborate with other developers, and continue building impactful
              projects.
            </p>
          </div>
          <div id="Contact">
            <div className="contact-header">
              <h2>Contact Me</h2>
              <h3 className="accent_color">Let's get in touch</h3>
            </div>
            <p id="contact-links">
              <a
                className="email-contact"
                href="mailto:sorensenhaley@gmail.com"
              >
                sorensenhaley@gmail.com
              </a>
              <a href="www.linkedin.com/in/haley-sorensen-1380b71b0">
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>Haley Sorensen 2026</p>
      </footer>
    </>
  );
}

export default App;
