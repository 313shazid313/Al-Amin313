const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    imageURL: {
      type: String,
      require: false,
      default:"123123123132123"
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: false }
);

const BrandModel = mongoose.model("Brand", brandSchema);
module.exports = BrandModel;
