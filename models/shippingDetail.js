const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const shippingDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShippingDetail =
  mongoose.models.ShippingDetail ||
  mongoose.model("ShippingDetail", shippingDetailSchema);

exports.ShippingDetail = ShippingDetail;
