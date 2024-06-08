const CarouselImages = require("../model/carouselImageModel");
const fs = require("fs-extra");

const createCarouselImage = async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;
  try {
    await CarouselImages.create({ image: imageName });
    res.json({ message: "image uploded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Image not create Error" });
  }
};

const getCarouselImages = async (req, res) => {
  try {
    await CarouselImages.find({}).then((data) => {
      //?code for getting a single data from database // Start

      data.forEach((gettinganimage) => {
        console.log(gettinganimage.image);
      });

      //?code for getting a single data from database // end

      res.send({ status: "ok", datas: data });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "cannot get image" });
  }
};

const deleteCarouselImage = async (req, res) => {
  try {
    const { id } = req.params;
    await CarouselImages.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "carousel image deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "cannot delete image" });
  }
};

module.exports = {
  createCarouselImage,
  getCarouselImages,
  deleteCarouselImage,
};
