import React from "react";

import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import {
	MoreHoriz as MoreHorizIcon,
	ThumbUpAlt as ThumbUpAltIcon,
	Delete as DeleteIcon,
} from "@material-ui/icons";
import moment from "moment";

import useStyles from "./styles.js";
import { useDispatch } from "react-redux";

import { setID } from "../../../store/actions/edit";

const Post = ({ post }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const editPost = (id) => {
		dispatch(setID(id));
	};

	return (
		<Card className={classes.card} key={post.id}>
			<CardMedia
				className={classes.media}
				title={post.title}
				image={post.selectedFile}
			/>
			<div className={classes.overlay}>
				<Typography variant="h6" color="initial">
					{post.creator}
				</Typography>
				<Typography variant="body2" color="initial">
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: "white" }}
					size="small"
					onClick={() => editPost(post._id)}
				>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag}`)}
				</Typography>
			</div>
			<Typography className={classes.title} variant="h6" gutterBottom>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={() => {}}>
					<ThumbUpAltIcon fontSize="small" />
					Like
					{post.likeCount}
				</Button>
				<Button size="small" color="primary" onClick={() => {}}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
