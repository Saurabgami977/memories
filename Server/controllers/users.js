import mongoose from "mongoose";
import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUsers = await Users.findOne({ email });
		if (!existingUsers) return (404).json({ message: "User doesn't exist" });

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUsers.password,
		);

		if (!isPasswordCorrect)
			return res.status(400).json({ message: "Invalid Credentials" });

		const token = jwt.sign(
			{
				email: existingUsers.email,
				id: existingUsers._id,
			},
			"test",
			{ expiresIn: "1h" },
		);

		res.status(200).json({ result: existingUsers, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const signup = async (req, res) => {
	const { email, password, confirmPassword, firstName, lastName } = req.body;
	try {
		const existingUser = await Users.findOne({ email });
		if (existingUser)
			return res.status(400).json({ message: "User already exist" });

		if (password !== confirmPassword)
			return res.status(400).json({ message: "Password didn't matched" });

		const hashedPassword = await bcrypt.hash(password, 12);
		const result = await Users.create({
			email,
			password: hashedPassword,
			name: `${firstName} ${lastName}`,
		});

		const token = jwt.sign(
			{
				email: result.email,
				id: result._id,
			},
			"test",
			{ expiresIn: "1h" },
		);

		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};
