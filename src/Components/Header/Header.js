import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import pic from "./prof-pic.jpg";

function Header() {
  return (
    <div className="header_container">
      <Link to="/">
        <div>
          <img id="profPic" src={pic} alt="profile-pic" />
          <h1>Evan S. Boggs</h1>
          <h3>FULL-STACK WEB DEVELOPER</h3>
        </div>
      </Link>
      <ul>
        <Link to="/portfolio">
          <li>Projects</li>
        </Link>
      </ul>{" "}
      To Connect:
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
      </a>
      <footer>
        All items on this site, including this site, were created by myself
        unless otherwise noted.
      </footer>
    </div>
  );
}
export default Header;
