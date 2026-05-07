import { useState } from "react";
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <header>
      <div>
        <h2>
          <a href="#Home">Haley</a>
        </h2>
      </div>

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
            <a href="#Projects" onClick={toggleHamburger}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={toggleHamburger}>
              Skills
            </a>
          </li>
          <li>
            <a href="#About" onClick={toggleHamburger}>
              About
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={toggleHamburger}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
