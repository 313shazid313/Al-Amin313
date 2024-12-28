const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
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
      required: false,
      ref: "Category",
      default: null,
    },
  },
  {
    timestamps: false,
  }
);

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
