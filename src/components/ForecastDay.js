import React from "react";
import PropTypes from "prop-types";
import "./ForecastDay.css";

import ForecastEntry from "./ForecastEntry.js";

export default class ForecastDay extends React.Component {

	/*static propTypes = {
		temperature: PropTypes.number.isRequired,
		icon: PropTypes.string.isRequired
	}*/

	render() {
		let { date, list } = this.props;

		return (
			<div className="ForecastDay">
				<h3>{date}</h3>
				<div className="ForecastEntryWrapper">
					{list.map(item => <ForecastEntry temperature={item.temperature} icon={item.icon} time={item.time} />)}
				</div>
			</div>
		)
	}

}
