import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/About/AboutMe";
// import Conact from "./Components/About/Contact/Contact";
// import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch> */}
      {/* <Route exact path="/" component={AboutMe} /> */}
      {/* <Route path='/contact' component={Contact}/> */}
      {/* <Route path='/projects' component={Projects}/> */}
      {/* <Route path='' component={}/> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
