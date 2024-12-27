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

module.exports = mongoose.model("Delivery", deliverySchema);
