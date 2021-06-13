var express = require("express");
const { default: axios } = require("axios");
var router = express.Router();
const request = require("request");
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
