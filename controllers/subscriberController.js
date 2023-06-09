const express = require("express");
const jwt = require("jsonwebtoken")
const Subscriber = require("../models/subscriberModel");
const Course = require("../models/courseModel");


const getAllSubscriber = async (req, res) => {
	let subscriber = await Subscriber.find({}).populate({
		path : "course",
	});
	console.log(`subscriber`, subscriber);
	return res.status(200).send({
		success: true,
		subscriber,
	
	});
};


const getSubscribtions = async (req, res) => {
	let subscriber = await Subscriber.find({user: req.user.id}).populate({
		path : "course",
	});
	return res.status(200).send({
		success: true,
		subscriber,
	
	});
};

const createSubscriber = async (req, res) => {
	try {
		const {course, date} = req.body;
		console.log('====================================');
		console.log(req.user);
		console.log('====================================');
		if ( !course || !date) {
			return res.status(200).send({
				success: false,
				message: "The Data is not found !",
			});
		}
		let subscriber = new Subscriber({ user : req.user.id, course , date });
		console.log(`subcsriber`, subscriber);
		await subscriber.save();
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
		let course = await Course.findById(id);
		console.log("course",course);
		let subscriber = await Subscriber.findById(id).populate({
			path : "course",
		});
		console.log("subscriber",subscriber);
		if (!subscriber) {
			return res.status(404).send({
				success: false,
				message: "The Subscriber not found.",
				course
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
	getSubscribtions,
	createSubscriber,
	oneSubscriber,
	updateSubscriber,
	deleteSubscriber,
};
