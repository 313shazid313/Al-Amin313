const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
    },
    imageURL: {
      type: String,
      required: false,
    },
    inHomeCategory: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
  },
  {
    timestamps: false, // Change to true if you want timestamps
  }
);

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
