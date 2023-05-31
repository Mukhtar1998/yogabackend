require("dotenv").config();
require("./config/database").connect();

const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require("./middlewares/authRoute") 

const userRouter = require("./routes/userRoute")
const subscriberRouter = require("./routes/subscriberRoute")
const courseRouter = require("./routes/courseRoute")
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const {API_PORT} =process.env;
const port = process.env.PORT || API_PORT;

app.use(verifyToken)

// API ROUTES
app.use("/api", userRouter)
app.use("/api", subscriberRouter)
app.use("/api", courseRouter)

app.listen(4002, ()=>console.log('listening on port ' + port));