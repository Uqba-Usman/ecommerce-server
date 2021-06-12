var express = require("express");
const { default: axios } = require("axios");
var router = express.Router();
const request = require("request");
/* GET home page. */
router.post("/", function (req, res, next) {
  // console.log("EASYPAISA_TEST", req);
  console.log("EASYPAISA_TEST", req.body);
  // ?Channel=${req.body.Channel}&Callback=${req.body.Callback}&username=${req.body.username}&pass=${req.body.pass}
  axios
    .post(
      `https://api.eu-de.apiconnect.appdomain.cloud/tariqqaisertelenorbankpk-tmbdev/dev-catalog/LoginAPI/LoginListener`
      // req.body
    )
    .then((res) => {
      console.log("EASYPAISA_TEST RES: ", res);
    })
    .catch((err) => console.log("ERROR: ", err));
  // const options = {
  //   method: "POST",
  //   url: "https://api.eu-de.apiconnect.appdomain.cloud/tariqqaisertelenorbankpk-tmbdev/dev-catalog/LoginAPI/LoginListener",
  // };

  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(body);
  // });
});

module.exports = router;
