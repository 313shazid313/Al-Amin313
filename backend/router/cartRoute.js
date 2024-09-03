const express = require("express");

const cartRouter = express.Router();

const {
  addToCart,
  removeFromCart,
  gettingAllCartProduct,
} = require("../controller/cart-controller");

const isCartTokenExist = require("../middleware/cartAuthMiddleware");

cartRouter.route("/addtocart").post(addToCart);
cartRouter.route("/removefromcart/:id").delete(removeFromCart);
cartRouter
  .route("/getallcartproduct")
  .get(isCartTokenExist, gettingAllCartProduct);

module.exports = cartRouter;
