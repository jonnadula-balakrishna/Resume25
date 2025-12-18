import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} <span>Balakrishna Jonnadula</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


