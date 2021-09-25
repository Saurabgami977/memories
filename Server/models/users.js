import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	is: { type: String },
});

export default mongoose.model("Users", usersSchema);
