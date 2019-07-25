import React from "react";

function Contact(props) {
  return (
    <div className="container">
      <h1>CONTACT ME</h1>
      <div id="statement">
        I am available for hire and open to any ideas of cooperation.
      </div>
      <br />
      <ul>
        <li>
          Email:
          <div>evboggs94@gmail.com</div>
        </li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/evansboggs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            evansboggs
          </a>
        </li>
        <li>
          GitHub:
          <a
            href="https://github.com/evboggs302"
            target="_blank"
            rel="noopener noreferrer"
          >
            evboggs302
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
