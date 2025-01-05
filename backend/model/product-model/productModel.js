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
    buyingPrice: {
      type: Number,
      required: false,
    },
    imageURL: {
      type: String,
      required: false,
    },
    offer: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: false,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    sellType: {
      type: String, // Correct the casing here
      required: true,
    },
    preOrder: {
      type: Boolean,
      required: false,
      default: false,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    typeId: {
      type: Schema.Types.ObjectId,
      ref: "Type",
    },
    originId: {
      type: Schema.Types.ObjectId,
      ref: "Origin",
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
    unitId: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
    },
  },
  { timestamps: false }
);

const productData = mongoose.model("Product", productSchema);
module.exports = productData;
