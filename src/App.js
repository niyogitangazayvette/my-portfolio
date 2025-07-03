import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import SocialIcons from "./components/SocialIcons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="App">
      <ScrollToTop />

      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-mode-btn"
      >
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>

      <Header />

      <section id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              I'm <strong>Yvette Niyogitangaza</strong>, a passionate web developer and data scientist.
              I love building beautiful websites and analyzing data to solve real-world problems.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1WR2SnCZIAK9PmGzQV55Y9f0g_ttkA3cK"
              className="cv-button"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download My CV
            </a>
          </div>
        </div>
      </section>

      <section data-aos="fade-right">
        <Skills />
      </section>

      <section data-aos="zoom-in-up">
        <Projects />
      </section>

      <section data-aos="fade-left">
        <Contact />
      </section>

      <SocialIcons />
      <Footer />
    </div>
  );
}

export default App;
