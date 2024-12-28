const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    charge: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const deliveryModel = mongoose.model("Delivery", deliverySchema);

module.exports = deliveryModel;
