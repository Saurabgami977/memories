const reducers = (id = null, action) => {
	switch (action.type) {
		case "EDIT":
			return action.payload;
		case "Done":
			return null;
		default:
			return null;
	}
};

export default reducers;
