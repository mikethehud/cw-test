import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default () => {

		return (
			<nav>
				<Link to="/">Home</Link>
				<Link to="/weather">Weather</Link>
				<Link to="/forecast">Forecast</Link>
			</nav>
		)

}
