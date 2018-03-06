import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navigation.css";

import { updatePlace, clearPlace } from "../actions/placeActions";
import { fetchForecast, fetchCurrentWeather } from "../actions/weatherActions";

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const mapStateToProps = (state, action) => {
	return {
		...state.place
	}
}

class Navigation extends React.Component {

	constructor(props) {

		super(props)
		this.state = {
			address: ''
		}

		this._handleChange = this._handleChange.bind(this);
		this._handleSelect = this._handleSelect.bind(this);
  }

	_handleChange = address => {
		this.setState({ address });

		if(this.props.lat && this.props.lng)
			this.props.dispatch(clearPlace());
	}

	_handleSelect = (address) => {
		this.setState({ address })
		// Geocode the Address
		geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
				// dispatch to store
				this.props.dispatch(updatePlace(address, latLng))
				// fetch weather
				this.props.dispatch(fetchForecast({ ...latLng }));
				this.props.dispatch(fetchCurrentWeather({ ...latLng }));
			})
      .catch(error => console.error('Error', error))
	}

	render() {

		const inputProps = {
			value: this.state.address,
      onChange: this._handleChange,
    }

		return (
			<nav>
				<div className="menu">
					<Link to="/">Home</Link>
					<Link to="/weather">Weather</Link>
					<Link to="/forecast">Forecast</Link>
				</div>
				<div className="input">
					<PlacesAutocomplete inputProps={inputProps} onSelect={this._handleSelect} />
				</div>
			</nav>
		)
	}

}

export default connect(mapStateToProps)(Navigation)
