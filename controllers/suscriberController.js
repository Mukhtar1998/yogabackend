const Subscriber = require("../models/subscriberModel");

const getAllSuscriber = async (req, res) => {
	let suscriber = await Subscriber.find({}).populate("Course");
	return res.status(200).send({
		success: true,
		suscriber,
	});
};

const createSuscriber = async (req, res) => {
	try {
		const { name, email, zipCode } = req.body;
		// if (name || email) {
		// 	return res.status(200).send({
		// 		success: false,
		// 		message: "The Data is not found !",
		// 	});
		// }
		let suscriber = new Subscriber({ name, email, zipCode });
		await suscriber.save();
		const token = jwt.sign(
			{ suscriber_id: suscriber.id, email },
			process.env.TOKEN_KEY,
			{ expiresIn: "3h" }
		);
		user.token = token;
		return res.status(200).send({
			success: true,
			message: "The Subscriber has been created.",
			suscriber,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const oneSuscriber = async (req, res) => {
	try {
		const { id } = req.params;
		let suscriber = await Subscriber.findById(id).populate("Course");
		if (!suscriber) {
			return res.status(404).send({
				success: false,
				message: "The Subscriber not found.",
			});
		}
		return res.status(200).send({
			success: true,
			message: "The Subscriber has been found.",
			suscriber,
		});
	} catch (error) {
		return res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const updateSuscriber = async (req, res) => {
	const { id } = req.params.id;
	let suscriber = await Subscriber.findByIdAndUpdate(id, req.body);
	res.status(200).send({
		success: true,
		message: "The Suscriber is modified",
		suscriber,
	});
};

const deleteSuscriber = async (req, res) => {
	try {
		const { id } = req.params;
		await Subscriber.findByIdAndDelete(id);
		res.status(200).send({
			success: true,
			message: "The Suscriber is deleted !",
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	getAllSuscriber,
	createSuscriber,
	oneSuscriber,
	updateSuscriber,
	deleteSuscriber,
};
