import { combineReducers } from "redux";

import posts from "./posts";
import edit from "./edit";

export default combineReducers({
	posts,
	edit,
});
