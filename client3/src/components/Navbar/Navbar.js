import React, { useEffect, useState } from "react";

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import memories from "../../images/memories.png";
import usestyles from "./index.style";
import { LOGOUT } from "../../store/actionTypes";
import decode from "jwt-decode";

const Navbar = () => {
	const classes = usestyles();
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("profile")));

		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);
			decodedToken.exp * 1000 < new Date().getTime() && logout();
		}
	}, [location]);

	const logout = () => {
		dispatch({ type: LOGOUT });
		history.push("/auth");
		setUser(null);
	};

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
							{user?.result?.name}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={logout}
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
					>
						Log in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
