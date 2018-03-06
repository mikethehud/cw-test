import React from "react";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";

import ForecastDay from "../components/ForecastDay.js";

const mapStateToProps = (state, action) => {
	return {
		forecast: state.forecast,
		place: state.place
	}
}

class Forecast extends React.Component {

	render() {

		let { forecast, place } = this.props;
		let { data, fetched, fetching, error } = forecast;

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
				if(today.toDateString() === dateString)
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

		// Check for errors
		if(error) {
			return (
				<div>
					<strong>ERROR:</strong> {error}
				</div>
			)
		}

		// Display message if no place selected
		if(!place.lat || !place.lng) {
			return (
				<div>
					<strong>Please select a place</strong> to get the weather forecast.
				</div>
			)
		}

		return (
			<div>
				<h1>Forecast for<br /><strong>{place.address}</strong></h1>
				{ fetched &&
					days.map((day, i) => {
						return (
							<ForecastDay key={i} list={day.list} date={day.date} />
						)
					})
				}

				{ fetching &&
					<MDSpinner size={70} />
				}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Forecast);
