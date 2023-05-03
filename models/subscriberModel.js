const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			lowercase: true,
		},
		course: {
			 type: mongoose.Schema.Types.ObjectId,ref: "Course",
			
		},
		day: {
			type : String
		},
		time: {
			type : Number
		},
		date: {
			type : Date
		}
	},
	{
		timestamps: true,

	}
	);
	
	const Subscriber = mongoose.model("Subscriber", subscriberSchema);
	module.exports = Subscriber;
	

		// courses: [{
		// 	name : {
		// 		type : String
		// 	},
		// 	day : {
		// 		type : String
		// 	},
		// 	time : {
		// 		type: String,
		// 	},
		// 	date : {
		// 		type: Date,
		// 	},
			
		// }],
	
	
	// {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: "Course",
		// 	day: {
			// 		type : String,
			// 	},
			// 	time : {
				// 		type : Number
	// 	},
	// 	date : {
		// 		type : Number
		// 	}
		// },
		
		// {
		// 	course : {type: mongoose.Schema.Types.ObjectId,ref: "Course"},
	
		// } 