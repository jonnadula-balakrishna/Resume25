import React from "react";

const About = () => (
 <section id="about" className="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <h3>About Me</h3>
          <h2>
            Passionate <span>Full Stack Developer</span>
          </h2>

          <p>
            I am an enthusiastic and detail-oriented Full Stack Developer with
            strong experience in Java, Spring Boot, Microservices, and React.
            I love building scalable backend systems and clean, modern user
            interfaces that solve real-world problems.
          </p>

          <p>
            I focus on writing clean code, following best practices, and
            continuously learning new technologies to improve performance and
            user experience.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-card" onClick={() => window.location.href = '#experience'}>
            <h4>Experience</h4>
            <p>3+ Years</p>
          </div>

          <div className="about-card" onClick={() => window.location.href = '#projects'}>
            <h4>Projects</h4>
            <p>4+</p>
          </div>

          <div className="about-card" onClick={() => window.location.href = '#skills'}>
            <h4>Tech Stack</h4>
            <p>Java • React • Spring •</p>
          </div>
        </div>
      </div>
    </section>
);

export default About;
