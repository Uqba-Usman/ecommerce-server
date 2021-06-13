const config = require("config");
// const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

exports.User = User;
