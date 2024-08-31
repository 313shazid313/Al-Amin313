const express = require("express");

const cartRouter = express.Router();

const {
  addToCart,
  removeFromCart,
  gettingAllCartProduct,
} = require("../controller/cart-controller");

cartRouter.route("/addtocart").post(addToCart);
cartRouter.route("/removefromcart/:id").delete(removeFromCart);
cartRouter.route("/getallcartproduct").get(gettingAllCartProduct);

module.exports = cartRouter;
