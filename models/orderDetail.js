const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    orderTotal: {
      type: Number,
    },
    orderProducts: [],
  },
  { timestamps: true }
);

const OrderDetail =
  mongoose.models.OrderDetail ||
  mongoose.model("OrderDetail", orderDetailSchema);

function validateOrderDetail(orderDetail) {
  // console.log(user);
  const schema = Joi.object({
    // title: Joi.string().required(),
    // price: Joi.number().required(),
    // category: Joi.string().required(),
    // description: Joi.string(),
    // salePercent: Joi.number(),
  });
  return schema.validate(orderDetail);
}

exports.Product = OrderDetail;
exports.validate = validateOrderDetail;
