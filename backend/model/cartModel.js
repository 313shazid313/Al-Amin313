const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const cartSchema = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

//! generate token starts ----->

cartSchema.methods.generateToken = async function () {
  //! instance method
  try {
    return jwt.sign({ cartId: this._id }, process.env.CARTSECRET, {
      expiresIn: "1d",
    });
  } catch (error) {
    console.error(error);
  }
};

//! generate token ends ----->

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
