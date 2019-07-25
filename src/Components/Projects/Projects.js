import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="container">
      MY WORK
      <span>
        <h1>The MadLib-Project</h1>
        <div>
          About
          <a
            href="https://madlib-project.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MadLib-Project.com
          </a>
        </div>
      </span>
      <span>
        <h1>DevFoutnain</h1>
        <div>
          About
          <a
            href="https://devfounta.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devfounta.in
          </a>
        </div>
      </span>
      <span>
        <h1>Testing Example</h1>
        <div>
          About / Work in Progress
          <a
            href="https://github.com/evboggs302/testing-walkthrough-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Testing Walk-Through
          </a>
        </div>
      </span>
    </div>
  );
}
