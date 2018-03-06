let initialState = {
	lat: null,
	lng: null,
	address: '—'
}

export default function placeReducer (state=initialState, action) {

	switch (action.type) {

		case "UPDATE_PLACE":
			return { ...action.payload }

		case "CLEAR_PLACE":
			return initialState;

		default:
			return state;

	}
}
