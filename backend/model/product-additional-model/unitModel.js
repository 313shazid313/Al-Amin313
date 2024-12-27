const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const UnitModel = mongoose.model("Brand", unitSchema);
module.exports = UnitModel;
