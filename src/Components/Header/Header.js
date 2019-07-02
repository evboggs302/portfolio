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
          <div id="testing">
            This is for tRavis
            <div>keepit going</div>
          </div>
          <h1>Evan S. Boggs</h1>
          <h3>FULL-STACK WEB DEVELOPER</h3>
        </div>
      </Link>
      <div>
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
        {/* <Link>
          <button />
        </Link> */}
        <div id="testing2">give me them points</div>
      </div>
    </div>
  );
}
export default Header;
