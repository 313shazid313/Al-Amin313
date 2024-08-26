const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim :true,
      unique: true,
    },
    // slug: {
    //   type: String,
    //   required: [true, "Category slug is required"],
    //   trim :true,
    //   unique: true,
    // },

  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
