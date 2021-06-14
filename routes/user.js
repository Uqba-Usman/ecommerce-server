const express = require("express");
const router = express.Router();
// const _ = require("lodash");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("config");

const { User } = require("../models/user");

router.post("/admin/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  if (user.role != "admin") return res.status(400).send("User is not admin");
  let token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});

router.post("/admin/register", async (req, res) => {
  console.log("Req body", req.body);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");

  // let user = new User();
  user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = "admin";
  await user.generateHashedPassword();
  await user.save();

  res.send(user);
});

router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});

router.post("/signup", async (req, res) => {
  console.log("Req body", req.body);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");

  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = "user";
  await user.generateHashedPassword();
  await user.save();

  res.send(user);
});

module.exports = router;
