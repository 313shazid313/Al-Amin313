const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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
      required: true,
    },
    offer: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("products", productSchema);
module.exports = productData;
