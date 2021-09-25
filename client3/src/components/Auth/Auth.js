import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	Avatar,
	Container,
	Paper,
	Typography,
	Grid,
	Button,
} from "@material-ui/core";
import { LockOpenOutlined as LockOpenOutlinedIcon } from "@material-ui/icons";

import Input from "./Input";
import useStyles from "./index.style";
import Icon from "./icon";
import { AUTH } from "../../store/actionTypes";
import { signin, signup } from "../../store/actions/auth";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const classes = useStyles();
	const history = useHistory();

	const dispatch = useDispatch();

	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	const switchMode = () => {
		setIsSignup((prevShowPassword) => !prevShowPassword);
	};
	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;
		console.log(result, token);
		try {
			dispatch({ type: AUTH, payload: { result, token } });
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
	const googleFailure = () => {
		console.log("Google Sign In was unsuccessfull. Try again later");
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOpenOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form onSubmit={handleSubmit} className={classes.form}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									label="First Name"
									name="firstName"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									label="Last Name"
									name="lastName"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							label="Email Address"
							name="email"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							label="Password"
							name="password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								label="Repeat Password"
								name="confirmPassword"
								handleChange={handleChange}
								type={showPassword ? "text" : "password"}
								handleShowPassword={handleShowPassword}
							/>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? "Sign up" : "Sign In"}
					</Button>
					<GoogleLogin
						clientId="377984731292-9lr9g4c6nmgac3uesjthl2a0hkn0p6ns.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
					/>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button
								onClick={switchMode}
								variant="text"
								color="secondary"
								size="small"
							>
								{isSignup
									? "Already Have an account? Sign In"
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
