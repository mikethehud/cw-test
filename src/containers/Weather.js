import React from "react";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";

import CurrentWeather from "../components/CurrentWeather.js";

const mapStateToProps = (state, action) => {
	return {
		weather: state.weather,
		place: state.place
	}
}

class Weather extends React.Component {

	render() {

		let { weather, place } = this.props;
		let { data, fetched, fetching, error } = weather;

		// Check for errors
		if(error) {
			return (
				<div>
					<strong>ERROR:</strong> {error}
				</div>
			)
		}

		// Display message if no place selected

		console.log('plc', place);

		if(!place.lat || !place.lng) {
			return (
				<div>
					<strong>Please select a place</strong> to get the current weather.
				</div>
			)
		}

		console.log(this.props);

		return (
			<div>
				<h1>Current weather for<br /><strong>{place.address}</strong></h1>
				{ fetched &&
					<CurrentWeather
						temperature={data.main.temp}
						humidity={data.main.humidity}
						main={data.weather[0].main}
						description={data.weather[0].description}
						icon={data.weather[0].icon}
					/>
				}

				{ fetching &&
					<MDSpinner size={70} />
				}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Weather);
