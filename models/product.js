const config = require("config");
// const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    salePercent: {
      type: Number,
    },
    selectedFile: {
      type: String,
      required: true,
    },
    saleApply: Boolean,
    isHotProduct: Boolean,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

function validateProduct(product) {
  // console.log(user);
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    description: Joi.string(),
    salePercent: Joi.number(),
  });
  return schema.validate(product);
}

exports.Product = Product;
exports.validate = validateProduct;
