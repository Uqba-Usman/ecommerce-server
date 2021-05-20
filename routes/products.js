const { Product } = require("../models/product");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const products = await Product.find({});
  console.log("Products", products);
  res.send(JSON.stringify(products));
});

router.get("/:id", async (req, res, next) => {
  console.log("Prams", req.params.id);
  try {
    const product = await Product.findOne({ _id: req.params.id });
    console.log("Products", product);
    res.send(JSON.stringify(product));
  } catch (error) {
    console.log("ERROR: ", error);
  }
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
