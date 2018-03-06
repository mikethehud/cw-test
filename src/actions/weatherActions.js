import axios from "axios";

const fetchCurrentWeather = () => {
  return dispatch => {
    dispatch({ type: "FETCH_CURRENT_WEATHER_START" });

    return axios.get("http://api.openweathermap.org/data/2.5/weather?appid=ef08a258a7a55cc69dc2ee3c5ed15a17&q=Auckland")
	    .then(response => {
				dispatch({ type: "FETCH_CURRENT_WEATHER_FULFILLED", payload: response.data })
			})
	    .catch(err => {
	      dispatch({ type: "FETCH_CURRENT_WEATHER_REJECTED", payload: err.message })
	    })
  }
}

const fetchForecast = () => {
  return dispatch => {
    dispatch({ type: "FETCH_FORECAST_START" });

    return axios.get("http://api.openweathermap.org/data/2.5/forecast?appid=ef08a258a7a55cc69dc2ee3c5ed15a17&q=Auckland")
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
