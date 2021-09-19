import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";

import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles.js";

const Posts = () => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);
	return !posts ? (
		<CircularProgress color="secondary" />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post.id} item xs={12} sm={6}>
					<Post post={post} key={post.id} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;