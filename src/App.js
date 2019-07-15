import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/About/AboutMe";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
