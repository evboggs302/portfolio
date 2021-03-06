import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import pic from "./prof-pic.jpg";

function Header() {
  return (
    <div className="header_container">
      <div>
        <Link to="/">
          <div>
            <img id="profPic" src={pic} alt="profile-pic" />
            <h1 id="name">Evan S. Boggs</h1>
            <h3 id="title">FULL-STACK WEB DEVELOPER</h3>
          </div>
        </Link>
      </div>
      <ul>
        <Link to="/portfolio">
          <li>My Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact Me</li>
        </Link>
        <br />
        <br />
      </ul>{" "}
      {/* To Connect:
      <div>evboggs94@gmail.com</div>
      <a
        href="https://www.linkedin.com/in/evansboggs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/evboggs302"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a> */}
      <footer>
        All items on this site, including this site, were created by myself
        unless otherwise noted.
      </footer>
    </div>
  );
}
export default Header;
