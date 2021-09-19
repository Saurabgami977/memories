import React, { useEffect, useState } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles.js";
import { createPost, updatePost } from "../../store/actions/posts.js";

const Form = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentID = useSelector((state) => state.edit);
	const posts = useSelector((state) => state.posts);

	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	useEffect(() => {
		const currentPost = posts?.find((post) => post._id === currentID);
		if (currentPost) {
			setPostData({
				creator: currentPost.creator,
				title: currentPost.title,
				message: currentPost.message,
				tags: currentPost.tags,
				selectedFile: currentPost.selectedFile,
			});
		}
	}, [posts, currentID]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentID) {
			dispatch(updatePost(currentID, postData));
			console.log(postData);
		} else {
			dispatch(createPost(postData));
		}
	};
	const clear = () => {};

	return (
		<Paper className={classes.paper}>
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				noValidate
				className={`${classes.form} ${classes.root}`}
			>
				<Typography variant="h6" color="inherit">
					{currentID ? "Editing" : "Creating"} a Memory
				</Typography>
				<TextField
					variant="outlined"
					name="creator"
					id="creator"
					label="Creator"
					value={postData.creator}
					onChange={(e) =>
						setPostData({ ...postData, creator: e.target.value })
					}
					fullWidth
				/>
				<TextField
					variant="outlined"
					name="title"
					id="title"
					label="Title"
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					fullWidth
				/>
				<TextField
					variant="outlined"
					name="message"
					id="message"
					label="Message"
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
					fullWidth
				/>
				<TextField
					variant="outlined"
					name="tags"
					id="tags"
					label="Tags"
					value={postData.tags}
					onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
					fullWidth
				/>
				<div className={classes.buttonSubmit}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					type="submit"
					size="large"
					fullWidth
				>
					{currentID ? "Update" : "Create"}
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					fullWidth
					onClick={clear}
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
