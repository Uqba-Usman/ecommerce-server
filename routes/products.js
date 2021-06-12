const { Product } = require("../models/product");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const products = await Product.find({});

  res.send(JSON.stringify(products));
});

router.get("/:id", async (req, res, next) => {
  console.log("Prams", req.params.id);
  try {
    const product = await Product.findOne({ _id: req.params.id });
    console.log("Product", product);
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
    product.selectedFile = req.body.selectedFile;

    console.log("Product", product);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log("Error", error);
  }

  // res.send(products);
});

router.put("/:id", async (req, res, next) => {
  try {
    console.log("Param id", req.params.id, "BODY", req.body);
    const product = await Product.findOne({ _id: req.params.id });
    console.log("Product Before Updation", product);

    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    product.salePercent = req.body.salePercent;
    product.saleApply = req.body.saleApply;
    product.isHotProduct = req.body.isHotProduct;

    console.log("Product after updation", product);
    await product.save();
    res.send(product);
  } catch (err) {
    console.log("Error", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("Param id", req.params.id, "BODY", req.body);
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    console.log("Product deleted", product);
    res.send(product);
  } catch (error) {
    console.log("Error deleting product", error);
  }
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
