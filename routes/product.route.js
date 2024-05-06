const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// fetch all products
router.get("/", getProducts);

// fetch specific product
router.get("/:id", getProductById);

// add new product
router.post("/", addProduct);

// edit product details
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
