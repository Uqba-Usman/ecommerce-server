var express = require("express");
const { default: axios } = require("axios");
var router = express.Router();
const request = require("request");
const date = require("date-and-time");
const { Product } = require("../models/product");
const sha256 = require("js-sha256");
var config = require("config");

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log("GET");
  // let unixEpochTime = seconds * 1000;
  const dd = new Date();
  console.log("Today: ", dd);

  const pp_TxnDateTime = date.format(dd, "YYYYMMDDHHmmss");
  console.log("formattedDateTime:", pp_TxnDateTime);

  const expirtyDate = date.addDays(dd, 40);
  const pp_TxnExpiryDateTime = date.format(expirtyDate, "YYYYMMDDHHmmss");
  console.log("pp_TxnExpiryDateTime: ", pp_TxnExpiryDateTime);

  const pp_TxnRefNo = "T" + pp_TxnDateTime;
  console.log("pp_TxnRefNo: ", pp_TxnRefNo);

  const pp_Amount = 30000;
  console.log("temp_amount: ", pp_Amount);

  const integritySalt = config.get("JAZZCASH_INTEGERITY_SALT");
  const str = `${config.get("JAZZCASH_INTEGERITY_SALT")}&${pp_Amount}&billRef&${
    req.body.cnic
  }&Description&${config.get("JAZZCASH_LANGUAGE")}&${config.get(
    "JAZZCASH_MERCHANT_ID"
  )}&${req.body.mobileNumber}&${config.get("JAZZCASH_PASSWORD")}&${config.get(
    "JAZZCASH_CURRENCY_CODE"
  )}&${pp_TxnDateTime}&${pp_TxnExpiryDateTime}&${pp_TxnRefNo}`;

  console.log("STR: ", str);

  const securehash = sha256(str + config.get("JAZZCASH_INTEGERITY_SALT"));
  console.log("SEUCURE HASH Hex: ", securehash);

  const passData = {
    pp_Language: config.get("JAZZCASH_LANGUAGE"),
    pp_MerchantID: config.get("JAZZCASH_MERCHANT_ID"),
    pp_SubMerchantID: "",
    pp_Password: config.get("JAZZCASH_PASSWORD"),
    pp_BankID: "",
    pp_ProductID: "",
    pp_TxnRefNo: pp_TxnRefNo,
    pp_Amount: pp_Amount,
    pp_TxnCurrency: config.get("JAZZCASH_CURRENCY_CODE"),
    pp_TxnDateTime: pp_TxnDateTime,
    pp_BillReference: "billRef",
    pp_Description: "Description",
    pp_TxnExpiryDateTime: pp_TxnExpiryDateTime,
    pp_SecureHash: securehash,
    ppmpf_1: "",
    ppmpf_2: "",
    ppmpf_3: "",
    ppmpf_4: "",
    ppmpf_5: "",
    pp_MobileNumber: req.body.mobileNumber,
    pp_CNIC: req.body.cnic,
  };
  // res.send(securehash);

  axios
    .post(
      "https://sandbox.jazzcash.com.pk/ApplicationAPI/API/2.0/Purchase/DoMWalletTransaction",
      passData
    )
    .then((response) => {
      console.log("RESPONSE: ", response);
      res.send(response.data);
    })
    .catch((err) => console.log("ERROR: ", err));
});

module.exports = router;
