const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    pname: {
      type: String,
      required: true,
    },
    pdescription: {
      type: String,
      required: true,
    },
    pprice: {
      type: Number,
      required: true,
    },
    pquantity: {
      type: Number,
      default: 0,
    },
    pcategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    pimage: {
      type: String,
    },
    poffer: {
      type: String,
      default: null,
    },
    pstatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("products", productSchema);
module.exports = productData;
