const {
	getAllSubscriber,
	getSubscribtions,
	createSubscriber,
	oneSubscriber,
	updateSubscriber,
	deleteSubscriber,
} = require("../controllers/subscriberController");
const subscriberRouter = require("express").Router();

subscriberRouter.get("/subscribers/all", getAllSubscriber);
subscriberRouter.get("/subscribtions", getSubscribtions);
subscriberRouter.post("/subscribers/create", createSubscriber);
subscriberRouter.get("/subscribers/:id", oneSubscriber);
subscriberRouter.put("/subscribers/update/:id", updateSubscriber);
subscriberRouter.delete("/subscribers/delete/:id", deleteSubscriber);

module.exports = subscriberRouter;
