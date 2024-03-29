const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.js");
const { isSignedIn, isAdmin } = require("./../middleware/auth.js");

router
  .route("/")
  .post(isSignedIn, orderController.addOrderItems)
  .get(isSignedIn, isAdmin, orderController.getOrders);

router.route("/myorders").get(isSignedIn, orderController.getMyOrders);
router.route("/:id").get(isSignedIn, orderController.getOrderById);
router.route("/:id/pay").put(isSignedIn, orderController.updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(isSignedIn, isAdmin, orderController.updateOrderToDelivered);

module.exports = router;
