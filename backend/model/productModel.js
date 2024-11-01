const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
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
