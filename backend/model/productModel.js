const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    Specification: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    deletePrice: {
      type: Number,
      required: [true, "Price is required"],
    },

    quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
      required: false,
    },
    offer: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: [false, "Status is required"],
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("Product", productSchema);
module.exports = productData;
