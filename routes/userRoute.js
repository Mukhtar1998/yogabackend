const {
	getAllUser,
	createUser,
	loginUser,
	oneUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../middlewares/authRoute");
const userRouter = require("express").Router();

userRouter.get("/users", getAllUser);
userRouter.post("/users/register", createUser);
userRouter.post("/users/login", loginUser);
userRouter.get("/users/:id", oneUser);
userRouter.put("/users/update/:id", verifyToken, updateUser);
userRouter.delete("/users/delete/:id", verifyToken, deleteUser);

module.exports = userRouter;
