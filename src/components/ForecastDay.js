import React from "react";
import PropTypes from "prop-types";
import "./ForecastDay.css";

import ForecastEntry from "./ForecastEntry.js";

export default class ForecastDay extends React.Component {

	static propTypes = {
		date: PropTypes.string,
		list: PropTypes.arrayOf(PropTypes.shape({
			temperature: PropTypes.number,
			icon: PropTypes.string,
			time: PropTypes.string
		}))
	}

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
