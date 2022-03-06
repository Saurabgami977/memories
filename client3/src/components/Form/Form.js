import React, { useEffect, useState } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import useStyles from "./styles.js";
import { createPost, updatePost } from "../../store/actions/posts.js";
import { clearID } from "../../store/actions/edit";

const Form = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentID = useSelector((state) => state.edit);
	const user = JSON.parse(localStorage.getItem("profile"));
	const history = useHistory();

	const post = useSelector((state) =>
		currentID ? state.posts.find((p) => p._id === currentID) : null,
	);

	const [postData, setPostData] = useState({
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentID) {
			dispatch(
				updatePost(currentID, { ...postData, name: user?.result?.name }),
			);
		} else {
			dispatch(createPost({ ...postData, name: user?.result?.name }, history));
		}
		clear();
	};
	const clear = () => {
		dispatch(clearID);
		setPostData({
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	if (!user?.result?.name) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h6" align="center">
					Please Sign In to create your own memories and like other's memories
				</Typography>
			</Paper>
		);
	}

	return (
		<Paper className={classes.paper} elevation={6}>
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
					onChange={(e) =>
						setPostData({ ...postData, tags: e.target.value.split(",") })
					}
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
