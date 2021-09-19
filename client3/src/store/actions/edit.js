import { EDIT, CLEAR } from "../actionTypes";

export const setID = (id) => (dispatch) => {
	dispatch({ type: EDIT, payload: id });
};

export const clearID = () => (dispatch) => {
	dispatch({ type: CLEAR, payload: null });
};
