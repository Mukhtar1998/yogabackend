const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		maxStudents: {
			type: Number,
			default: 0,
			min: [0, "Course ne peut avoir un nombre negatif d'etudiants"],
		},
		cost: {
			type: Number,
			default: 0,
			min: [0, "Le prix du Cours ne peut pas être négatif"],
		},
	},
	{
		timestamps: true,
	}
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
