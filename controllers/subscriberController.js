const express = require("express");
const jwt = require("jsonwebtoken")
const Subscriber = require("../models/subscriberModel");


const getAllSubscriber = async (req, res) => {
	let subscriber = await Subscriber.find({}).populate("Course");
	console.log(`subscriber`, subscriber);
	return res.status(200).send({
		success: true,
		subscriber,
		courses,
	
	});
};

const createSubscriber = async (req, res) => {
	try {
		const { name, email } = req.body;
		if (!name || !email ) {
			return res.status(200).send({
				success: false,
				message: "The Data is not found !",
				courses,

			});
		}
		let subscriber = new Subscriber({ name, email });
		console.log(`subcsriber`, subscriber);
		await subscriber.save();
		const token = jwt.sign(
			{ susbcriber_id: subscriber.id, email },
			process.env.TOKEN_KEY,
			{ expiresIn: "3h" }
		);
		user.token = token;
		return res.status(200).send({
			success: true,
			message: "The Subscriber has been created.",
			subscriber,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const oneSubscriber = async (req, res) => {
	try {
		const { id } = req.params;
		let subscriber = await Subscriber.findById(id).populate("Course");
		if (!subscriber) {
			return res.status(404).send({
				success: false,
				message: "The Subscriber not found.",
			});
		}
		return res.status(200).send({
			success: true,
			message: "The Subscriber has been found.",
			subscriber,
		});
	} catch (error) {
		return res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const updateSubscriber = async (req, res) => {
	const { id } = req.params.id;
	let subscriber = await Subscriber.findByIdAndUpdate(id, req.body);
	res.status(200).send({
		success: true,
		message: "The Subscriber is modified",
		subscriber,
	});
};

const deleteSubscriber = async (req, res) => {
	try {
		const { id } = req.params;
		await Subscriber.findByIdAndDelete(id);
		res.status(200).send({
			success: true,
			message: "The Subscriber is deleted !",
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	getAllSubscriber,
	createSubscriber,
	oneSubscriber,
	updateSubscriber,
	deleteSubscriber,
};
