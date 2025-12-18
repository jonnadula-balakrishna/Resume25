import React from "react";
import "../styles/skills.css";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Spring MVC", level: "Advanced" },
      { name: "Spring Security (JWT)", level: "Intermediate" },
      { name: "Hibernate / JPA", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Intermediate" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Material UI", level: "Intermediate" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "AWS (EC2, S3)", level: "Intermediate" },
      { name: "CI/CD Basics", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Maven", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "JUnit", level: "Intermediate" },
      { name: "Mockito", level: "Intermediate" },
      { name: "Agile / Scrum", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        {/* HEADER */}
        <div className="skills-header">
          <h3>Skills</h3>
          <h2>
            My <span>Technical Skills</span>
          </h2>
          <p>
            Backend, Frontend, Database, Cloud and tools I use to build scalable
            applications.
          </p>
        </div>

        {/* CONCAT CARD GRID */}
        <div className="skills-category-grid">
          {skillCategories.map((category, index) => (
            <div
              className={`skills-category-card ${index === 0 ? "first" : ""
                } ${index === skillCategories.length - 1 ? "last" : ""}`}
              key={category.title}
            >
              <h4>{category.title}</h4>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-level ${skill.level.toLowerCase()}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      </div>
    </section>
  );
};

export default Skills;
