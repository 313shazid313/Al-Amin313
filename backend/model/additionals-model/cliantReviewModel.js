const mongoose = require("mongoose");

const cliantReviewSchema = new mongoose.Schema(
  {
    imageURL: {
      type: String,
      default: "132123",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CliantReview", cliantReviewSchema);
