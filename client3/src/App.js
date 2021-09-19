import React, { useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./store/actions/posts";
import "./App.css";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import usestyles from "./styles";

function App() {
	const classes = usestyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h6">
					MERN APP
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="Memories"
					height="60"
					width="60"
				/>
			</AppBar>

			<Grow in>
				<Container>
					<Grid
						container
						spacing={1}
						justifyContent="space-between"
						alignItems="stretch"
						className={classes.mainContainer}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>

						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
