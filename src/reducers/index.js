import { combineReducers } from "redux";
import currentWeather from "./weatherReducer";
import forecast from "./forecastReducer";
import place from "./placeReducer";

export default combineReducers({
	forecast: forecast,
	weather: currentWeather,
	place: place
})
