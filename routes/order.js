var express = require("express");
const { default: axios } = require("axios");
var router = express.Router();
const request = require("request");
const date = require("date-and-time");
const sha256 = require("js-sha256");
var config = require("config");
const { OrderDetail } = require("../models/orderDetail");
const { Feedback } = require("../models/feedback");
const { ShippingDetail } = require("../models/shippingDetail");

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log("REQ BODY: ", req.body);
  const dd = new Date();
  const pp_TxnDateTime = date.format(dd, "YYYYMMDDHHmmss");
  const expirtyDate = date.addDays(dd, 40);
  const pp_TxnExpiryDateTime = date.format(expirtyDate, "YYYYMMDDHHmmss");
  const pp_TxnRefNo = "T" + pp_TxnDateTime;
  const pp_Amount = 30000;

  const str = `${config.get("JAZZCASH_INTEGERITY_SALT")}&${pp_Amount}&billRef&${
    req.body.cnic
  }&Description&${config.get("JAZZCASH_LANGUAGE")}&${config.get(
    "JAZZCASH_MERCHANT_ID"
  )}&${req.body.mobileNumber}&${config.get("JAZZCASH_PASSWORD")}&${config.get(
    "JAZZCASH_CURRENCY_CODE"
  )}&${pp_TxnDateTime}&${pp_TxnExpiryDateTime}&${pp_TxnRefNo}`;
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
    pp_MobileNumber: req.body.jazzcashDetail.jazzcashPhoneNo,
    pp_CNIC: req.body.jazzcashDetail.jazzcashCNIC,
  };

  axios
    .post(
      "https://sandbox.jazzcash.com.pk/ApplicationAPI/API/2.0/Purchase/DoMWalletTransaction",
      passData
    )
    .then(async (response) => {
      console.log("RESPONSE: ", response.data);
      if (response.data.pp_ResponseCode != 000) {
        return res.status(400).send("Error In payment");
      }
      console.log("RESPONSE: ", response.data);
      let shippingDetail = new ShippingDetail();
      shippingDetail.name = req.body.shippingDetail.name;
      shippingDetail.email = req.body.shippingDetail.email;
      shippingDetail.phone = req.body.shippingDetail.phone;
      shippingDetail.address = req.body.shippingDetail.address;
      const returnShippingDetail = await shippingDetail.save();
      console.log("RET: ", returnShippingDetail);
      console.log("RET Created At: ", returnShippingDetail.createdAt);
      const cAt = date.format(
        returnShippingDetail.createdAt,
        "YYYY-MM-DD HH:mm:ss"
      );
      console.log("RET Cat: ", cAt);
      let orderDetail = new OrderDetail();
      orderDetail.orderProducts = req.body.orderProducts;
      orderDetail.orderTotal = req.body.orderTotal;
      orderDetail.shipTo = returnShippingDetail._id;
      const orderreturnSave = await orderDetail.save();

      console.log("orderreturnSave: ", orderreturnSave);

      // const orderGet = await OrderDetail.find({})
      //   .populate("orderProducts")
      //   .populate("shipTo");
      // console.log("ORDER GET: ", orderGet);
      res.send(orderreturnSave);
    })
    .catch((err) => console.log("ERROR: ", err));
});

router.post("/feedback", async (req, res, next) => {
  console.log("REQ BODY: ", req.body);

  let feedback = new Feedback();
  feedback.comments = req.body.comments;
  feedback.postedBy = req.body.postedBy;
  feedback.ratingValue = req.body.ratingValue;

  const returnFeedback = await feedback.save();
  console.log("returnFeedback", returnFeedback);

  res.send(returnFeedback);
});
module.exports = router;
