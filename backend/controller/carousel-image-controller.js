const CarouselImages = require("../model/additionals-model/carouselImageModel");

const createCarouselImage = async (req, res, next) => {
  try {
    const { image } = req.body;

    const newImage = CarouselImages({ image });

    const imageURL = await newImage.save();
    return res.status(200).json(imageURL);
  } catch (error) {
    next(error);
  }
};

const getCarouselImages = async (req, res, next) => {
  try {
    const allImages = await CarouselImages.find();
    return res.status(200).json(allImages);
  } catch (error) {
    next(error);
  }
};

const deleteCarouselImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    await CarouselImages.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: "carousel image deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCarouselImage,
  getCarouselImages,
  deleteCarouselImage,
};
