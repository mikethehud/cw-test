import { combineReducers } from "redux";
import currentWeather from "./weatherReducer";
import forecast from "./forecastReducer";

export default combineReducers({
	currentWeather,
	forecast
})
