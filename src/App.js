import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={} />
        {/* <Route path='/' component={}/> */}
        {/* <Route path='' component={}/> */}
        {/* <Route path='' component={}/> */}
      </Switch>
    </div>
  );
}

export default App;
