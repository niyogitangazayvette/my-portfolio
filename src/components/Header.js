import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img src="/profile.JPEG" alt="Yvette" className="header-profile-image" />
      </div>

      <div className="header-text">
        <h1>Hello, I'm <span className="name">Yvette Niyogitangaza</span></h1>
        <p>Aspiring Data Scientist & Web Developer</p>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
