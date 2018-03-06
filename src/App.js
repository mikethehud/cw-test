import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Weather from "./containers/Weather.js";
import Forecast from "./containers/Forecast.js";
import Home from "./containers/Home.js";

import Navigation from "./components/Navigation.js";

class App extends Component {
  render() {
    return (
      <div className="App">
				<Navigation />
				<Route exact path="/" component={Home} />
      	<Route exact path="/weather" component={Weather} />
      	<Route exact path="/forecast" component={Forecast} />
      </div>
    );
  }
}

export default App;
