const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema(
  {
    orderTotal: {
      type: Number,
    },
    orderProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    shipTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShippingDetail",
    },
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

exports.OrderDetail = OrderDetail;
exports.validate = validateOrderDetail;
