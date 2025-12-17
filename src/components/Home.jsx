import React from "react";
import balakrishna from "../assets/baala-removebg-preview (1).png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Hi, I am <br />
          <span>Balakrishna Jonnadula</span>
        </h1>

        <h2>Java full Stack Developer</h2>

        <p>
          An enthusiastic and a passionate coder with an eye for detail and a
          focus to produce quality work.
        </p>

        <button className="primary-btn" onClick={() => window.location.href = '#contact'}>
          Contact Me <span>➜</span>
        </button>

        <div className="scroll">
          <div className="mouse"></div>
          <span>Scroll Down</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="blob"></div>

        {/* Replace src later with your image */}
        <img
          src={balakrishna}
          alt="profile"
          className="profile"
        />
      </div>
    </section>
  );
};

export default Hero;
