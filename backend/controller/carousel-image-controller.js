const CarouselImages = require("../model/carouselImageModel");
const fs = require("fs-extra");

const createCarouselImage = async (req, res, next) => {
  const imageName = req.file.filename;
  try {
    await CarouselImages.create({ image: imageName });
    res.json({ message: "image uploded successfully" });
  } catch (error) {
    next(error);
  }
};

const getCarouselImages = async (req, res, next) => {
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
    next(error);
  }
};

const deleteCarouselImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    // await CarouselImages.findByIdAndDelete({ _id: id });

    const fileData = await CarouselImages.findByIdAndDelete({ _id: id });
    // console.log(fileData);

    const filename = fileData.image;
    // console.log(filename);

    const filePath = "./carouselimages/" + filename;
    // console.log(filePath);

    // unlink file with fs module
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("cannot unlink image");
        console.log(err);
      } else console.log("file deleted successfully");
    });

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
