import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "pandas",
    "NumPy",
    "Git & GitHub",
    "Data Visualization",
    "Machine Learning (beginner)"
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
