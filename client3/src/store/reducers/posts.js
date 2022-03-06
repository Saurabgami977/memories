import {
	CREATE,
	UPDATE,
	DELETE,
	LIKEPOST,
	FETCH,
	FETCH_BY_SEARCH,
	START_LOADING,
	END_LOADING,
	FETCH_POST,
} from "../actionTypes";

const reducers = (state = { isLoading: true, posts: [] }, action) => {
	switch (action.type) {
		case FETCH:
			return {
				...state,
				posts: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPage: action.payload.numberofPage,
			};
		case FETCH_POST:
			return {
				...state,
				post: action.payload,
			};
		case FETCH_BY_SEARCH:
			return {
				...state,
				posts: action.payload,
			};
		case CREATE:
			return { ...state, posts: [...state.posts, action.payload] };
		case UPDATE:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post,
				),
			};
		case DELETE:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== action.payload),
			};
		case LIKEPOST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post,
				),
			};
		case START_LOADING:
			return { ...state, isLoading: true };
		case END_LOADING:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};

export default reducers;
