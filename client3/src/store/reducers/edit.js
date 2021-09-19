import { EDIT, CLEAR } from "../actionTypes";

const reducers = (id = null, action) => {
	switch (action.type) {
		case EDIT:
			return action.payload;
		case CLEAR:
			return action.payload;
		default:
			return null;
	}
};

export default reducers;
