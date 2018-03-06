import React from "react";
import PropTypes from "prop-types";
import "./ForecastEntry.css";

export default class ForecastEntry extends React.Component {

	static propTypes = {
		temperature: PropTypes.number.isRequired,
		icon: PropTypes.string.isRequired
	}

	render() {
		let { temperature, icon, time } = this.props;

		// Temperature from kelvin to celcius
		temperature = Math.round(temperature - 273.15);

		return (
			<div className="ForecastEntry">
				<img src={ "http://openweathermap.org/img/w/" + icon + ".png" } alt="Weather Icon" className="icon" />
				<div className="time">{time}</div>
				<div className="temperature">
					<div className="bar" style={{ height: temperature*1.7 }} />
					<div className="number">{temperature}°C</div>
				</div>
			</div>
		)
	}

}
