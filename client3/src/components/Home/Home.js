import React from "react";

import { Container, Grid, Grow } from "@material-ui/core";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./index.style";

const Home = () => {
	const classes = useStyles();
	return (
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
	);
};

export default Home;
