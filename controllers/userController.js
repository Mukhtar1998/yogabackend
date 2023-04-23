const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Subscriber = require("../models/subscriberModel");

const getAllUser = async (req, res) => {
	let user = await User.find({});
	return res.status(200).send({
		success: true,
		user,
	});
};

const createUser = async (req, res) => {
	try {
		const { name, lastName, email, password } = req.body;
		await res.status(200).send({
		    success : true,
		    message : "The user has been created"
		    // courses,
		})

		if (!name || !lastName || !email || !password) {
			return res.status(400).send({
				success: false,
				message: "The Data is not found !",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			name,
			lastName,
			email,
			password: hashedPassword,
		});

		const isSuscribe = await Subscriber.findOne({ email });
		if (isSuscribe) {
			user.subscribedAccount = isSuscribe._id;
		}

		const token = jwt.sign({ user_id: user.id, email }, process.env.TOKEN_KEY, {
			expiresIn: "3h",
		});
		user.token = token;
		await user.save();
		return res.status(200).send({
			success: true,
			message: "The User has been registered",
			user,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!(email && password)) {
			return res.status(400).send({
				success: false,
				message: "All input are required !",
			});
		}
		const user = await User.findOne({ email });
		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				{ user_id: user.id, email },
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" }
			);
			user.token = token;
			return res.status(200).send({
				success: true,
				message: "Success fully login !",
				user,
			});
		}
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const oneUser = async ( req, res) => {
	try {
		const { id } = req.params;
		let user = await User.findById(id);
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found !",
			});
		}
		return res.status(200).send({
			success: true,
			message: "The User has been found",
			user,
		});
	} catch (error) {
		return res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const updateUser = async (req, res) => {
	const id = req.params.id;
	const user = await User.findByIdAndUpdate(id, req.body);
	res.status(200).send({
		success: true,
		message: "User is modified",
		user,
	});
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		res.status(200).send({
			success: true,
			message: "User is deleted !",
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	getAllUser,
	createUser,
	loginUser,
	oneUser,
	updateUser,
	deleteUser,
};
