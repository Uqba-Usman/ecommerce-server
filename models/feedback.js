const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    comments: {
      type: String,
    },
    postedBy: {},
    ratingValue: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

exports.Feedback = Feedback;
