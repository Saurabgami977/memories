import { combineReducers } from "redux";

import posts from "./posts";
import edit from "./edit";
import authReducer from "./auth";

export default combineReducers({
	posts,
	edit,
	authReducer,
});
