import React from "react";

export default function Projects(props) {
  return (
    <div className="container">
      <h1>MY PROJECTS</h1>
      <span className="entry">
        <div>
          <h2>The MadLib-Project</h2>
          <div>(June 2019)</div>
        </div>
        <a
          href="https://madlib-project.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MadLib-Project.com
        </a>
        <article>
          Find yourself enjoying MadLibs? This site empowers you to fill out,
          create, browse, and share MadLibs!
        </article>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>Socket.IO</li>
          <li>SQL</li>
          <li>Stripe</li>
          <li>Bcrypt</li>
        </ul>
      </span>
      <br />
      <span className="entry">
        <div>
          <h2>DevFountain</h2>
          <div>(July 2019)</div>
        </div>
        <a
          href="https://devfounta.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devfounta.in
        </a>
        <article>
          DevFountain is a social media app that allows developers and tech
          recuiters to interact in a direct way. Made with love, and almost
          exclusively with React Hooks, DevFounta.in is the creation of a team
          of developers for developers.
        </article>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>React Hooks</li>
          <li>Socket.IO</li>
          <li>SASS</li>
          <li>Cloudinary</li>
          <li>{`Unit & Integration Testing`}</li>
        </ul>
      </span>
      <br />
      <span className="entry">
        <div>
          <h2>Testing Example</h2>
          <div>(July 2019 - )</div>
        </div>
        <a
          href="https://github.com/evboggs302/testing-walkthrough-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing Walk-Through
        </a>
        <article>
          This repo was designed and created to help provide clarity and
          examples on how integration and unit testing works (including testing
          hooks!). At the time this repo was created, hooks aren't widely
          popular nor used yet, so testing has been somewhat ambiguos to many.
          This repo will help in giving a basic understanding of integration and
          unit testing, as well as a good platform to launch more research in
          testing React Hooks.
        </article>
        <em id="comment">**THIS IS A CONTINUAL WORK-IN-PROGRESS**</em>
        <ul>
          Technologies:
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>JavaScript</li>
          <li>jooks</li>
          <li>Bcrypt</li>
          <li>And More! ...</li>
        </ul>
      </span>
      <br />
      <br />
      <br />
    </div>
  );
}
