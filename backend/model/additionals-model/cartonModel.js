const mongoose = require("mongoose");

const cartonModelSchema = new mongoose.Schema(
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

const cartonModel = mongoose.model("Carton", cartonModelSchema);

module.exports = cartonModel;
