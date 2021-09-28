import {
	CREATE,
	UPDATE,
	DELETE,
	LIKEPOST,
	FETCH,
	FETCH_BY_SEARCH,
} from "../actionTypes";

const reducers = (state = [], action) => {
	switch (action.type) {
		case FETCH:
			return {
				...state,
				posts: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPage: action.payload.numberofPage,
			};
		case FETCH_BY_SEARCH:
			return {
				...state,
				posts: action.payload,
			};
		case CREATE:
			return [...state, action.payload];
		case UPDATE:
			return state.map((post) =>
				post._id === action.payload._id ? action.payload : post,
			);
		case DELETE:
			return state.filter((post) => post._id !== action.payload);
		case LIKEPOST:
			return state.map((post) =>
				post._id === action.payload._id ? action.payload : post,
			);
		default:
			return state;
	}
};

export default reducers;
