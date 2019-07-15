import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutMe.css";

//https://devmountain.com/web-bootcamp-immersive

function AboutMe() {
  return (
    <div className="aboutPage">
      <h1>Welcome! I'm Evan,</h1>
      <p>a full-stack web developer looking to grow my skills and give back.</p>
      <div>
        <NavLink>
          <button>Portfolio</button>
        </NavLink>
        <NavLink>
          <button>Contact Me</button>
        </NavLink>
      </div>
    </div>
  );
}

export default AboutMe;
