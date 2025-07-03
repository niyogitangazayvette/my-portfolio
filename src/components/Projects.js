import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Weather Data Analysis",
      description: "Collected and analyzed weather data using Python and pandas to predict rainfall patterns.",
      tech: ["Python", "pandas", "Matplotlib"],
      link: "https://github.com/niyogitangazayvette/weather-analysis"
    },
    {
      title: "Personal Portfolio Website",
      description: "Built a responsive portfolio using React, HTML, CSS, and JavaScript.",
      tech: ["React", "CSS", "JavaScript", "HTML"],
      link: "#"
    },
    {
      title: "Kanis Electronics Scraper",
      description: "Developed a web scraper to extract product data and analyze electronics market trends.",
      tech: ["Python", "BeautifulSoup", "Pandas"],
      link: "https://github.com/niyogitangazayvette/kanis-scraper"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((techItem, idx) => (
                <span key={idx} className="tech-item">{techItem}</span>
              ))}
            </div>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
