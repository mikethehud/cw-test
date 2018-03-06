let initialState = {
	data: null,
	fetching: false,
	error: false,
	fetched: false
}

export default function reducer (state=initialState, action) {

	switch (action.type) {

		case "FETCH_FORECAST_START":
			return { ...state, fetching: true }

		case "FETCH_FORECAST_FULFILLED":
			return { ...state, data: action.payload, fetched: true, fetching: false, error: false }

		case "FETCH_FORECAST_REJECTED":
			return { ...state, data: null, fetching: false, error: action.payload }

		default:
			return initialState;

	}
}
