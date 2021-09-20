import React from "react";

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import memories from "../../images/memories.png";
import usestyles from "./index.style";

const Navbar = () => {
	const classes = usestyles();

	const user = null;

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<div className={classes.brandContainer}>
				<Typography
					component={Link}
					to="/"
					className={classes.heading}
					variant="h6"
				>
					MERN APP
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="Memories"
					height="60"
					width="60"
				/>
			</div>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography variant="h6" className={classes.userName}>
							{user.result.name}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={() => {}}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
						onClick={() => {}}
					>
						Log in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
