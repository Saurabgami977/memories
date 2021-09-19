const reducers = (posts = [], action) => {
	switch (action.type) {
		case "UPDATE":
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post,
			);
		case "FETCH":
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		case "DELETE":
			return posts;
		default:
			return posts;
	}
};

export default reducers;