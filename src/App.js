import React, { Component } from "react";
import "./App.css";

import Weather from "./containers/Weather.js";
import Forecast from "./containers/Forecast.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forecast />
      </div>
    );
  }
}

export default App;
