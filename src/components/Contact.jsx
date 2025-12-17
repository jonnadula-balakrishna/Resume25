import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* HEADER */}
        <div className="contact-header">
          <h3>Contact</h3>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>
            Feel free to reach out for opportunities, collaborations, or just a
            quick chat.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-content">
          <div className="contact-card">
            <h4>Email</h4>
            <a href="mailto:myself.jbk@gmail.com">myself.jbk@gmail.com</a>
          </div>

          <div className="contact-card">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/balakrishna-jonnadula-7b5144339/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/balakrishna-jonnadula-7b5144339/
            </a>
          </div>

          <div className="contact-card">
            <h4>GitHub</h4>
            <a
              href="https://github.com/jonnadula-balakrishna"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jonnadula-balakrishna
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
