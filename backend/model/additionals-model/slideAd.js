const mongoose = require("mongoose");

const slideAdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    paramLink: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: false,
    },
    adSize: {
      type: String,
      required: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("SlideAd", slideAdSchema);
