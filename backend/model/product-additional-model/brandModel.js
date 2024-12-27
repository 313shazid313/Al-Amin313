const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const BrandModel = mongoose.model("Brand", brandSchema);
module.exports = BrandModel;
