const {
	getAllUser,
	createUser,
	loginUser,
	oneUser,
	userCourses,
	updateUser,
	deleteUser,
	userProfile,
} = require("../controllers/userController");
const verifyToken = require("../middlewares/authRoute");
const userRouter = require("express").Router();

userRouter.get("/users", getAllUser);
userRouter.post("/users/register", createUser);
userRouter.post("/users/login", loginUser);
userRouter.get("/users/:id", oneUser);
userRouter.get("/userprofile", userProfile);
userRouter.get("/users/:id/courses", userCourses);
userRouter.put("/users/update/:id", verifyToken, updateUser);
userRouter.delete("/users/delete/:id", verifyToken, deleteUser);

module.exports = userRouter;
