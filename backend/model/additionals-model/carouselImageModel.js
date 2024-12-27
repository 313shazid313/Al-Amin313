const mongoose = require("mongoose");

const carouselImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarouselImages = mongoose.model("CarouselImages", carouselImageSchema);
module.exports = CarouselImages;
