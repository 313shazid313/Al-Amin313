const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const TypeModel = mongoose.model("Brand", typeSchema);
module.exports = TypeModel;
