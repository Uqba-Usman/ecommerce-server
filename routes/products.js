const { Product } = require("../models/product");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const data = {
    title: "Product",
  };
  res.send(data);
});

router.post("/", async (req, res, next) => {
  console.log("REQ BODY", req.body);
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    product.salePercent = req.body.salePercent;
    product.saleApply = req.body.saleApply;
    product.isHotProduct = req.body.isHotProduct;

    console.log("Product", product);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log("Error", error);
  }

  // res.send(products);
});

module.exports = router;

// {
//   "title":"T Shirt",
//   "price":"100",
//   "category":"Mens",
//   "description":"Beautiful shirt",
//   "salePercent":"10",
//   "saleApply":"true",
//   "isHotProduct":"true"
// }
