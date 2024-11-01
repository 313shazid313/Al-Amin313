const {
  createCarouselImage,
  getCarouselImages,
  deleteCarouselImage,
} = require("../controller/carousel-image-controller");

const express = require("express");
const router = express.Router();

router.route("/upload").post(createCarouselImage);
router.route("/gettingcarouselimages").get(getCarouselImages);

//! deleting a single image
router.route("/deleteacarouselimage/:id").delete(deleteCarouselImage);
module.exports = router;
