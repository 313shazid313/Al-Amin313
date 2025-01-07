const mongoose = require("mongoose");

const cartonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const cartonModel = mongoose.model("Carton", cartonSchema);

module.exports = cartonModel;
