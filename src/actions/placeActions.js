const updatePlace = (address, latLng) => {
  return dispatch => {
    dispatch({ type: "UPDATE_PLACE", payload: { address, ...latLng } });
  }
}

const clearPlace = () => {
  return dispatch => {
		dispatch({ type: "CLEAR_PLACE" });
  }
}

export {
  updatePlace,
	clearPlace
}
