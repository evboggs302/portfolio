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
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact Me</li>
        </Link>
        {/* <Link>
          <li />
        </Link> */}
      </ul>
      <footer>To contact Me, dont.</footer>
    </div>
  );
}
export default Header;
