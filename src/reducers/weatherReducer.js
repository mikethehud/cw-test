let initialState = {
	data: null,
	fetching: false,
	error: false,
	fetched: false
}

export default function weatherReducer (state=initialState, action) {

	switch (action.type) {

		case "FETCH_CURRENT_WEATHER_START":
			return { ...state, fetching: true }

		case "FETCH_CURRENT_WEATHER_FULFILLED":
			return { ...state, data: action.payload, fetched: true, fetching: false, error: false }

		case "FETCH_CURRENT_WEATHER_REJECTED":
			return { ...state, data: null, fetching: false, error: action.payload }

		default:
			return state;

	}
}
