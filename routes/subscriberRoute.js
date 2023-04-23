const {
	getAllSubscriber,
	createSubscriber,
	oneSubscriber,
	updateSubscriber,
	deleteSubscriber,
} = require("../controllers/subscriberController");
const subscriberRouter = require("express").Router();

subscriberRouter.get("/subscribers", getAllSubscriber);
subscriberRouter.post("/subscribers/create", createSubscriber);
subscriberRouter.get("/subscribers/:id", oneSubscriber);
subscriberRouter.put("/subscribers/:id/update", updateSubscriber);
subscriberRouter.delete("/subscribers/:id/delete", deleteSubscriber);

module.exports = subscriberRouter;
