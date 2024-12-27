const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
