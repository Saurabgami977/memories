export const setID = (id) => (dispatch) => {
	dispatch({ type: "EDIT", payload: id });
};
