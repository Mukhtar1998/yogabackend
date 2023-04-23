const Course = require("../models/courseModel");

const getAllCourse = async (req, res) => {
	let course = await Course.find({});
	// console.log(`course`, course);
	return res.status(200).send({
		success: true,
		course,
	});
};

const createCourse = async (req, res) => {
	try {
		let course = new Course(req.body);
		// console.log(`course`, course);
		// const {title, description, maxStudent, cost} = req.body;
		await course.save();
		console.log(`course`, course);
		return res.status(200).send({
			success: true,
			message: "The course has been successfully created.",
			Course,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const oneCourse = async (req, res) => {
	try {
		const { id } = req.params;
		let course = await Course.findById(id);
		if (!course) {
			return res.status(404).send({
				success: false,
				message: "Couldn't find the Cours !",
			});
		}
		return res.status(200).send({
			success: true,
			message: "The Course has been found.",
			course,
		});
	} catch (error) {
		return res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const updateCourse = async (req, res) => {
	const { id } = req.params.id;
	console.log(`id`, id);
	let course = await Course.findByIdAndUpdate(id, req.body);
	res.status(200).send({
		success: true,
		message: "The Course is modified",
		course,
	});
};

const deleteCourse = async (req, res) => {
	try {
		const { id } = req.params.id;
		await Course.findByIdAndDelete(id);
		res.status(200).send({
			success: true,
			message: "The Course is deleted !",
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	getAllCourse,
	createCourse,
	oneCourse,
	updateCourse,
	deleteCourse,
};
