import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./Component/Dashboard/Dashboard";
import Wizard from "./Component/Wizard/Wizard";
import Header from "./Component/Header/Header";
import House from "./Component/House/House";
import Routes from "./route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="routes">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
