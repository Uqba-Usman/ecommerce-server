const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    note: {
      type: String,
    },
    chatName: {
      type: String,
    },
    postedBy: {},
  },
  { timestamps: true }
);

const Notes = mongoose.models.Notes || mongoose.model("Notes", notesSchema);

exports.Notes = Notes;
