const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
		},
		courses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
	},
	{
		timestamps: true,
	}
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
module.exports = Subscriber;
