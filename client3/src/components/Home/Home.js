import React, { useState } from "react";

import {
	Container,
	Grid,
	Grow,
	Paper,
	AppBar,
	TextField,
	Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { useDispatch } from "react-redux";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./index.style";
import Pagination from "../Pagination";
import { getPostsBySearch } from "../../store/actions/posts";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Home = () => {
	const [search, setSearch] = useState("");
	const [tags, setTags] = useState([]);
	const dispatch = useDispatch();
	const classes = useStyles();
	const query = useQuery();
	const history = useHistory();
	const page = query.get("page") || 1;
	const searchQuery = query.get("searchQuery");

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			searchPost();
		}
	};

	const searchPost = () => {
		if (search.trim() || tags) {
			dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
			history.push(
				`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`,
			);
		} else {
			history.push("/");
		}
	};

	const handleAdd = (tag) => setTags([...tags, tag]);

	const handleDelete = (tagToDelete) =>
		setTags(tags.filter((tag) => tag !== tagToDelete));

	return (
		<Grow in>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={1}
					justifyContent="space-between"
					alignItems="stretch"
					className={classes.gridContainer}
				>
					<Grid item xs={12} sm={6} md={9}>
						<Posts />
					</Grid>

					<Grid item xs={12} sm={6} md={3}>
						<AppBar
							className={classes.appBarSearch}
							position="static"
							color="inherit"
						>
							<TextField
								name="search"
								variant="outlined"
								label="Search Memories"
								fullWidth
								value={search}
								onKeyPress={handleKeyPress}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<ChipInput
								style={{ margin: "10px 0" }}
								value={tags}
								onAdd={handleAdd}
								onDelete={handleDelete}
								label="Search Tags"
								variant="outlined"
							/>
							<Button
								onClick={searchPost}
								className={classes.searchButton}
								color="primary"
								variant="contained"
							>
								Search
							</Button>
						</AppBar>
						<Form />
						{!searchQuery && !tags.length && (
							<Paper elevation={6} className={classes.pagination}>
								<Pagination page={page} />
							</Paper>
						)}
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
