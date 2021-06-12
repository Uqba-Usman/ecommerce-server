const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Login
router.get("/", function (req, res, next) {
  console.log("LOGIN INSIDE");
  const options = {
    method: "GET",
    url: "https://api.eu-de.apiconnect.appdomain.cloud/tariqqaisertelenorbankpk-tmbdev/dev-catalog/LoginAPI/Login",
    qs: {
      Channel: "subgateway",
      Callback:
        "BfBQAASLUs30QmBum1/9wxnMmRWih2b4YsVd87L4RQ2bD2r0ary9gJpjMz537wdyVMbw9NY40stpqB3XgnX0nwj/WQvL1xYGUJshWMYt+lkYwHHODZhBTyzP7oOJfiCnvHgZ4DyvtleO6TitFP6ps2iSLqDSa6koHxBUFuf614IGEx8L5nBTNNCxtuBDc0eHAe/afurnWecOjphB0ruBtFRiCmSjFpEFTDQtVHBcdtAo5BpnLXvXbQ2Xf1S+i/yIvCllKOyIWcQ3EqysYAkFheDX/tZIVTi1HCHaXI9XEpTppxLF9ywa08r/atrYmgwmTqcTlW2Hpc0CVI4/fbSFxQ==",
    },
    // body: { Username: "03347951468", Password: "49592" },
    headers: { accept: "application/json" },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
    // res.render(body);
    console.log(body, "RES", response);
  });
});

// router.get("/", function (req, res, next) {
//   axios
//     .get(
//       "https://api.eu-de.apiconnect.appdomain.cloud/tariqqaisertelenorbankpk-tmbdev/dev-catalog/LoginAPI/Login?Channel=subgateway&Callback=BfBQAASLUs30QmBum1/9wxnMmRWih2b4YsVd87L4RQ2bD2r0ary9gJpjMz537wdyVMbw9NY40stpqB3XgnX0nwj/WQvL1xYGUJshWMYt+lkYwHHODZhBTyzP7oOJfiCnvHgZ4DyvtleO6TitFP6ps2iSLqDSa6koHxBUFuf614IGEx8L5nBTNNCxtuBDc0eHAe/afurnWecOjphB0ruBtFRiCmSjFpEFTDQtVHBcdtAo5BpnLXvXbQ2Xf1S+i/yIvCllKOyIWcQ3EqysYAkFheDX/tZIVTi1HCHaXI9XEpTppxLF9ywa08r/atrYmgwmTqcTlW2Hpc0CVI4/fbSFxQ==",
//       { Username: "03347951468", Password: "49592" }
//     )
//     .then((res) => console.log("RES: ", res))
//     .catch((err) => console.log("ERROR: ", err));
// });

router.post("/", function (req, res, next) {
  console.log("REQ BODY", req.body);
  axios
    .post(
      "https://api.eu-de.apiconnect.appdomain.cloud/tariqqaisertelenorbankpk-tmbdev/dev-catalog/LoginAPI/LoginListener",
      req.body
    )
    .then((res) => console.log("RES: ", res))
    .catch((err) => console.log("ERROR: ", err));
});

module.exports = router;
