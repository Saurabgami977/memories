import mongoose from "mongoose";
import PostMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
	const { page } = req.query;

	try {
		const limit = 8;
		const startIndex = (Number(page) - 1) * limit;
		const total = await PostMessage.countDocuments({});

		const posts = await PostMessage.find()
			.sort({ _id: -1 })
			.limit(limit)
			.skip(startIndex);
		res.status(200).json({
			data: posts,
			currentPage: Number(page),
			numberofPage: Math.ceil(total / limit),
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getPost = async (req, res) => {
	const { id } = req.params;

	try {
		const post = await PostMessage.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getPostsBySearch = async (req, res) => {
	const { searchQuery, tags } = req.query;
	try {
		const title = new RegExp(searchQuery, "i");
		const post = await PostMessage.find({
			$or: [{ title }, { tags: { $in: tags.split(",") } }],
		});
		res.status(200).json({ data: post });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;

	const newPost = new PostMessage({
		...post,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	try {
		await newPost.save();

		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No Post found with this ID");

	const updatedPost = await PostMessage.findByIdAndUpdate(
		_id,
		{ ...post, _id },
		{
			new: true,
		},
	);

	res.json(updatedPost);
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Post found with this ID");

	await PostMessage.findOneAndDelete(id);

	res.status(200).json({ message: "Post Deleted Successfully" });
};

export const likePost = async (req, res) => {
	const { id } = req.params;

	if (!req.userId) return res.json({ message: "Unauthenticated" });

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Post found with this ID");

	const post = await PostMessage.findById(id);

	const index = post.likes.findIndex((id) => id === String(req.userId));

	if (index === -1) {
		//like
		post.likes.push(req.userId);
	} else {
		//dislike
		post.likes = post.likes.filter((id) => id !== String(req.userId));
		// post.like.push(req.userId);
	}

	const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
		new: true,
	});

	res.json(updatedPost);
};
