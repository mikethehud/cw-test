import React from "react";
import { connect } from "react-redux";
import { fetchForecast } from "../actions/weatherActions";

import ForecastDay from "../components/ForecastDay.js";

const mapStateToProps = (state, action) => {
	return {
		...state.forecast
	}
}

class Weather extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchForecast());
	}

	render() {

		let { data, fetched, fetching, error } = this.props;

		// Split up the data list into Days
		if(fetched) {
			var days = [];
			let list = data.list;
			let i = 0;

			list.forEach(item => {

				// Check for the current date of the entry
				let date = new Date(item.dt*1000);
				let dateString = date.toDateString();

				// Ignore any data for the current day
				let today = new Date();
				if(today.toDateString() == dateString)
					return;

				// Take the relevant info
				let data = {
					time: date.getHours()+":00",
					temperature: item.main.temp,
					icon: item.weather[0].icon
				}

				// Check if same date as current day
				if(days[i] && days[i].date === dateString) {
					// If yes, just add to the list
					days[i].list.push(data)
				}
				else {
					// Otherwise initialize a new day and increment the counter
					i++;
					days[i] = {
						date: dateString,
						list: [ data ]
					}
				}
			})
		}

		return (
			<div>
				<h2>Forecast for <strong>Auckland</strong></h2>
				{ fetched &&
					days.map(day => {
						return (
							<ForecastDay list={day.list} date={day.date} />
						)
					})
				}

				{ fetching &&
					<div>SPINNER</div>
				}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Weather);
