const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
exports.connect = () => {
  mongoose.connect("mongodb://localhost:27017", {

  })
  .then(() => {
    console.log("successfuly connect to the database");
  })
  .catch((error) =>{
    console.log("database connection failed");
    console.error(error);
    process.exit(1);
  })
};
