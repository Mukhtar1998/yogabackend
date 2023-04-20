const {
	getAllSuscriber,
	createSuscriber,
	oneSuscriber,
	updateSuscriber,
	deleteSuscriber,
} = require("../controllers/suscriberController");
const suscriberRouter = require("express").Router();

suscriberRouter.get("/subscribers", getAllSuscriber);
suscriberRouter.post("/subscribers/create", createSuscriber);
suscriberRouter.get("/subscribers/:id", oneSuscriber);
suscriberRouter.put("/subscribers/:id/update", updateSuscriber);
suscriberRouter.delete("/subscribers/:id/delete", deleteSuscriber);

module.exports = suscriberRouter;
