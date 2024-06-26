const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
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
      required: [true, "Catrgory is required"],
    },
    image: {
      type: String,
      contentType: "String",
      required: [true, "Product image is required"],
    },
    offer: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("products", productSchema);
module.exports = productData;
