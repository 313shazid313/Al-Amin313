const Cart = require("../model/cartModel");
const createError = require("http-errors");

const addToCart = async (req, res, next) => {
  try {
    const { product } = req.body;
    // console.log(product);
    const productExist = await Cart.exists({ product: product });
    if (productExist) {
      throw createError(409, "Product already exist in cart");
    }

    const addedToCart = await new Cart(req.body).populate({
      path: "product",
      populate: { path: "category" },
    });

    const data = await addedToCart.save();
    res.status(201).json({ data, token: await addedToCart.generateToken() });
  } catch (error) {
    next(error);
  }
};

const gettingAllCartProduct = async (req, res, next) => {
  try {
    const showAll = await Cart.find().populate({
      path: "product",
      populate: { path: "category" },
    });
    res.status(200).json(showAll);
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Removed from cart successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  gettingAllCartProduct,
};
