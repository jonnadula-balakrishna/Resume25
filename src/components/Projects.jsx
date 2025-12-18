import React from "react";
import "../styles/projects.css";

const projects = [
    {
        title: "SBI YONO 2.0 – SBI Life Module",
        company: "State Bank of India (SBI)",
        type: "Onsite | Full Time",
        duration: "Jun 2025 – Present",
        description:
            "Developed key components of the SBI YONO 2.0 SBI Life module, supporting end-to-end insurance services. Implemented features for policy purchase, premium payments, renewals, and group/individual policy management. Enabled smooth policy access, downloads, and enhanced customer self-service capabilities.",
        tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "PostgreSQL", "Postman", "Grafana"],
    },
    {
        title: "Keap CRM Platform",
        company: "Keap (formerly Infusionsoft)",
        type: "Offsite | Full Time",
        duration: " Feb 2023 – Feb 2025",
        description:
            "Worked on Keap CRM platform providing email marketing, sales automation, and e-commerce solutions for small businesses. Built and enhanced backend services, APIs, and integrations to manage customers, payments, and marketing workflows.",
        tech: ["Java", "Spring Boot", "MySQL", "JWT", "Microservices", "React"],
    },
    {
        title: "Securisk Insurance Platform",
        company: "Securisk (Hyderabad)",
        type: "Offsite | Full Time",
        duration: "May 2022 – Feb 2023",
        description:
            "Developed insurance brokerage platform enabling companies to manage employee insurance policies. Implemented quote-based insurance processing, policy allocation, and customer management features.",
        tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                {/* HEADER */}
                <div className="projects-header">
                    <h3>Projects</h3>
                    <h2>
                        Featured <span>Work</span>
                    </h2>
                    <p>
                        Professional projects showcasing real-world experience in enterprise
                        applications and platforms.
                    </p>
                </div>

                {/* GRID */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            {/* LEFT CONTENT */}
                            <div className="project-content">
                                <h4>{project.title}</h4>

                                <p>
                                    <strong>{project.company}</strong>
                                </p>
                                <p>{project.type}</p>
                                <p>{project.duration}</p>

                                <p>{project.description}</p>
                            </div>

                            {/* RIGHT TECH STACK */}
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
