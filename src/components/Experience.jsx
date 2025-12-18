import React from "react";
import "../styles/experience.css";

const experiences = [
  {
    role: "Java Developer",
    company: "Tata Consultancy Services",
    period: "2025 – Present",
    points: [
      "Developed scalable Spring Boot microservices",
      "Integrated REST APIs with frontend applications",
      "Improved application performance and stability",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ojas Innovative Technologies Pvt Ltd",
    period: "2022 – 2025",
    points: [
      "Worked on Java backend modules",
      "Implemented database queries using MySQL",
      "Collaborated with cross-functional teams",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        {/* HEADER */}
        <div className="experience-header">
          <h3>Experience</h3>
          <h2>
            My <span>Work Journey</span>
          </h2>
          <p>
            A brief overview of my professional experience and the roles I have
            worked in.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot"></div>

              <div className="experience-card">
                <h4>{exp.role}</h4>
                <p className="experience-meta">
                  {exp.company} | {exp.period}
                </p>

                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
