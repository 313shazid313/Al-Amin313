const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: false }
);

const TypeModel = mongoose.model("Brand", typeSchema);
module.exports = TypeModel;
