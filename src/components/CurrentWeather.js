import React from "react";
import PropTypes from "prop-types";
import "./CurrentWeather.css";

export default class CurrentWeather extends React.Component {

	static propTypes = {
		temperature: PropTypes.number.isRequired,
		humidity: PropTypes.number.isRequired,
		main: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	}

	render() {
		let { temperature, humidity, main, icon } = this.props;

		// Temperature from kelvin to celcius
		temperature = Math.round(temperature - 273.15);

		return (
			<div className="CurrentWeather">
				<img src={ "http://openweathermap.org/img/w/" + icon + ".png" } alt="Weather Icon" />
				<p><strong>{main}</strong></p>
				<p>Temperature: {temperature}°C</p>
				<p>Humidity: {humidity}%</p>
			</div>
		)
	}

}
