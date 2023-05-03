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
subscriberRouter.put("/subscribers/update/:id", updateSubscriber);
subscriberRouter.delete("/subscribers/delete/:id", deleteSubscriber);

module.exports = subscriberRouter;
