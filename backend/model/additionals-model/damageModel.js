const mongoose = require("mongoose");
const { Schema } = require("mongoose");

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

const damageModel = mongoose.model("Damage", damageSchema);
module.exports = damageModel;
