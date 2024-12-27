const mongoose = require("mongoose");

const damageSchema = new mongoose.Schema(
  {
    productName: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    damageQAT: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Stock", damageSchema);
