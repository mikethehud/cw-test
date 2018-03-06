import React from "react";
import { connect } from "react-redux";
import { fetchCurrentWeather } from "../actions/weatherActions";
import MDSpinner from "react-md-spinner";

import CurrentWeather from "../components/CurrentWeather.js";

const mapStateToProps = (state, action) => {
	return {
		...state.currentWeather
	}
}

class Weather extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchCurrentWeather());
	}

	render() {

		let { data, fetched, fetching, error } = this.props;

		// Check for errors
		if(error) {
			return (
				<div>
					<strong>ERROR:</strong> {error}
				</div>
			)
		}

		return (
			<div>
				<h1>Today's weather for <strong>Auckland</strong></h1>
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
