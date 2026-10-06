import { useState } from "react";
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <header>
      <h2>
        <a href="#Home">Haley Sorensen</a>
      </h2>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={hamburgerOpen ? "true" : "false"}
        onClick={toggleHamburger}
      ></button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={hamburgerOpen ? "true" : "false"}
          className={`primary-navigation ${hamburgerOpen ? "open" : "close"}`}
        >
          <li>
            <a href="#projects" onClick={toggleHamburger}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleHamburger}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleHamburger}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleHamburger}>
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
