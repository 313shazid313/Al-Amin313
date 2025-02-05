const mongoose = require("mongoose");

const originSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique:true
    },
  },
  { timestamps: false }
);

const OriginModel = mongoose.model("Origin", originSchema);
module.exports = OriginModel;
