import React from "react";

import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	ButtonBase,
} from "@material-ui/core";
import {
	MoreHoriz as MoreHorizIcon,
	ThumbUpAlt as ThumbUpAltIcon,
	ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
	Delete as DeleteIcon,
} from "@material-ui/icons";
import moment from "moment";
import { useHistory } from "react-router-dom";

import useStyles from "./styles.js";
import { useDispatch } from "react-redux";

import { setID } from "../../../store/actions/edit";
import { deletePost, likePost } from "../../../store/actions/posts";

const Post = ({ post }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const loggedInUser = JSON.parse(localStorage.getItem("profile"));

	const editPost = (id) => {
		dispatch(setID(id));
	};

	const Likes = () => {
		if (post.likes.length > 0) {
			return post.likes.find(
				(like) =>
					like ===
					(loggedInUser?.result?.googleId || loggedInUser?.result?._id),
			) ? (
				<>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{post.likes.length > 2
						? `You and ${post.likes.length - 1} others`
						: `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
				</>
			) : (
				<>
					<ThumbUpAltOutlinedIcon fontSize="small" />
					&nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
				</>
			);
		}

		return (
			<>
				<ThumbUpAltOutlinedIcon fontSize="small" />
				&nbsp;Like
			</>
		);
	};

	const openPost = () => {
		history.push(`/posts/${post._id}`);
	};

	return (
		<Card className={classes.card} key={post.id} raised elevation={6}>
			<ButtonBase className={classes.cardAction} onClick={openPost}>
				<CardMedia
					className={classes.media}
					title={post.title}
					image={post.selectedFile}
				/>
				<div className={classes.overlay}>
					<Typography variant="h6" color="initial">
						{post.name}
					</Typography>
					<Typography variant="body2" color="initial">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
				{(post.creator === loggedInUser?.result._id ||
					loggedInUser?.result.googleId === post.creator) && (
					<div className={classes.overlay2}>
						<Button
							style={{ color: "white" }}
							size="small"
							onClick={() => editPost(post._id)}
						>
							<MoreHorizIcon fontSize="medium" />
						</Button>
					</div>
				)}
				<div className={classes.details}>
					<Typography variant="body2" color="textSecondary">
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
				</div>
				<Typography className={classes.title} variant="h6" gutterBottom>
					{post.title}
				</Typography>
				<CardContent>
					<Typography variant="body2" component="p" color="textSecondary">
						{post.message}
					</Typography>
				</CardContent>
			</ButtonBase>

			<CardActions className={classes.cardActions}>
				<Button
					disabled={!loggedInUser}
					size="small"
					color="primary"
					onClick={() => {
						dispatch(likePost(post._id));
					}}
				>
					<Likes />
				</Button>
				{(post.creator === loggedInUser?.result._id ||
					loggedInUser?.result.googleId === post.creator) && (
					<Button
						size="small"
						color="primary"
						onClick={() => {
							dispatch(deletePost(post._id));
						}}
					>
						<DeleteIcon fontSize="small" />
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Post;
