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
        <section id="About">
          <h1>
            Hi, I'm <span className="accent_color">Haley Sorensen</span>
          </h1>
          <p>
            I'm a full stack developer with a strong interest in building modern
            web applications. I've worked with both front-end and back-end
            technologies to create projects that focus on usability,
            performance, and clean design. Through my learning and hands-on
            projects, I've developed experience working with frameworks, APIs,
            and databases. I enjoy problem-solving and am motivated to keep
            growing as a developer. <br />
            I'm currently looking for opportunities where I can contribute,
            learn from experienced developers, and continue building real-world
            applications.
          </p>
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
                "An Inventory Management web that allows users to manage categories and items for a fictional store of video game theme. Users can perform full CRUD operations on both categories and items, view items within each category, and navigate the inventory through a simple interface."
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
                "A React-based mock shopping cart application that simulates a simple e-commerce experience. Users can browse products from an external API, add items to their cart, and manage quantites with real-time updates. The project highlights routing, state management, testing, and clean component design within a single-page application."
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
                "A browser-based Battleship game built with Test-Driven Development, featuring modular game logic, unit-tested functionality, and an interactive UI where a player competes against a computer in turn-based gameplay."
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
        <section id="Contact">
          <h3 className="accent_color">Get in Touch</h3>
          <p id="contact_links">
            <a href="mailto:sorensenhaley@gmail.com">Email</a>
            <a href="www.linkedin.com/in/haley-sorensen-1380b71b0">LinkedIn</a>
          </p>
        </section>
      </main>
      <footer>
        <p>Haley Sorensen 2026</p>
      </footer>
    </>
  );
}

export default App;
