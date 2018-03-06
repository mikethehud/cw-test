import axios from "axios";

const fetchCurrentWeather = (latLng) => {
  return dispatch => {
    dispatch({ type: "FETCH_CURRENT_WEATHER_START" });

		let getParams = "lat="+parseInt(latLng.lat,10)+"&lon="+parseInt(latLng.lng,10);

    return axios.get("http://api.openweathermap.org/data/2.5/weather?appid=ef08a258a7a55cc69dc2ee3c5ed15a17&"+getParams)
	    .then(response => {
				dispatch({ type: "FETCH_CURRENT_WEATHER_FULFILLED", payload: response.data })
			})
	    .catch(err => {
	      dispatch({ type: "FETCH_CURRENT_WEATHER_REJECTED", payload: err.message })
	    })
  }
}

const fetchForecast = (latLng) => {
  return dispatch => {
    dispatch({ type: "FETCH_FORECAST_START" });

		let getParams = "lat="+parseInt(latLng.lat,10)+"&lon="+parseInt(latLng.lng,10);

    return axios.get("http://api.openweathermap.org/data/2.5/forecast?appid=ef08a258a7a55cc69dc2ee3c5ed15a17&"+getParams)
	    .then(response => {
				dispatch({ type: "FETCH_FORECAST_FULFILLED", payload: response.data })
			})
	    .catch(err => {
	      dispatch({ type: "FETCH_FORECAST_REJECTED", payload: err.message })
	    })
  }
}

export {
  fetchCurrentWeather,
	fetchForecast
}
