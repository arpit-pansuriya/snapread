const express = require("express");
const router = express.Router();
const {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} = require("../controller/product.js");
const { isAdmin, isSignedIn } = require("../middleware/auth.js");

router.route("/").get(getProducts).post(isSignedIn, isAdmin, createProduct);
router.route("/:id/reviews").post(isSignedIn, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(isSignedIn, isAdmin, deleteProduct)
  .put(isSignedIn, isAdmin, updateProduct);

module.exports = router;
