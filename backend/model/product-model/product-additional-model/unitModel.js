const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: false }
);

const UnitModel = mongoose.model("Unit", unitSchema);
module.exports = UnitModel;
