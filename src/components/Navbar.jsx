import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(true); // Start with dark theme (green)

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme class to body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => window.location.href = '#home'}>Balakrishna</div>

      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={activeTab === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => handleClick("skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => handleClick("experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeTab === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </li>

        {/* Theme Toggle Icon */}
        <li 
          className="theme-icon" 
          onClick={toggleTheme} 
          title={isDark ? "Switch to Light Theme (Orange)" : "Switch to Dark Theme (Green)"}
        >
          {isDark ? "☀️" : "🌙"}
        </li>
      </ul>
    </nav>
  );
}