const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    productName: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    note: {
      type: String,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Stock", stockSchema);
