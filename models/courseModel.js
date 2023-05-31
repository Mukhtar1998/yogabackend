const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    maxStudents: {
      type: Number,
      min: [0, "Course ne peut avoir un nombre negatif d'etudiants"],
    },
    cost: {
      type: String,
      min: [0, "Le prix du Cours ne peut pas être négatif"],
    },
    courses: [
      {
        day: String,
        time: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
