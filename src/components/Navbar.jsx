import "../styles/navbar.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ["home", "about", "skills", "experience", "projects", "contact"];

  const handleClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  /* ================= THEME ================= */
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // navbar offset

      let current = "home";

      tabs.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);



  return (
    <nav className="navbar">
      <div className="logo" onClick={() => window.location.href = "#home"}>
        Balakrishna
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={`#${tab}`}
              className={activeTab === tab ? "active" : ""}
              onClick={() => handleClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          </li>
        ))}

        {/* Theme Toggle */}
        <li className="theme-icon" onClick={toggleTheme}>
          <span className="icon">{isDark ? "☀" : "☽"}</span>
          <span className="tooltip">
            {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </span>
        </li>
      </ul>
    </nav>
  );
}
