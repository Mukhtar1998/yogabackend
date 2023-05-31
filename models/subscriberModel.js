const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const Subscriber = mongoose.model("Subscriber", subscriberSchema);
module.exports = Subscriber;
