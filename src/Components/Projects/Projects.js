import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="container">
      MY WORK
      <br />
      <span>
        <div>
          <h1>The MadLib-Project</h1>
          <div>(June 2019)</div>
        </div>
        <a
          href="https://madlib-project.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MadLib-Project.com
        </a>
        <div>
          Find yourself enjoying MadLibs? This site empowers you to fill out,
          create, browse, and share MadLibs!
        </div>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>Socket.IO</li>
          <li>CSS</li>
          <li>PostgreSQL</li>
          <li>And More! ...</li>
        </ul>
      </span>
      <br />
      <span>
        <div>
          <h1>DevFoutnain</h1>
          <div>(July 2019)</div>
        </div>
        <a
          href="https://devfounta.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devfounta.in
        </a>
        <div>
          DevFounta.in is a social media app that allows developers and tech
          recuiters to interact in a direct way. Made with love, and almost
          exclusively with React Hooks, DevFounta.in is the creation of a team
          of developers for developers.
        </div>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>React Hooks</li>
          <li>Socket.IO</li>
          <li>SASS</li>
          <li>NodeMailer</li>
          <li>And More! ...</li>
        </ul>
      </span>
      <br />
      <span>
        <div>
          <h1>Testing Example</h1>
          <div>(July 2019 - )</div>
        </div>
        <a
          href="https://github.com/evboggs302/testing-walkthrough-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing Walk-Through
        </a>
        <div>
          This repo was designed and created to help provide clarity and
          examples on how integration and unit testing works (including testing
          hooks!). At the time this repo was created, hooks aren't widely
          popular nor used yet, so testing has been somewhat ambiguos to many.
          This repo will help in giving a basic understanding of integration and
          unit testing, as well as a good platform to launch more research in
          testing React Hooks.
        </div>
        <div>THIS IS A CONTINUAL WORK-IN-PROGRESS</div>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>jooks</li>
          <li>BCRYPT</li>
          <li>And More! ...</li>
        </ul>
      </span>
    </div>
  );
}
