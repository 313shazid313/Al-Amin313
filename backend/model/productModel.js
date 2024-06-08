const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    pname: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    pdescription: {
      type: String,
      required: [true, "Description is required"],
    },
    pprice: {
      type: String,
      required: [true, "Price is required"],
    },
    pquantity: {
      type: Number,
      default: 0,
    },
    pcategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Catrgory is required"],
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
      required: [true, "Status is required"],
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("products", productSchema);
module.exports = productData;
