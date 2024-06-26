const {
  createCarouselImage,
  getCarouselImages,
  deleteCarouselImage,
} = require("../controller/carousel-image-controller");

//multer middleware code
const multer = require("multer");
// const upload = multer({ dest: "./images/carouselimages" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/carouselimages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Math.round(Math.random() * 1e9)}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const express = require("express");
const router = express.Router();

router.route("/upload").post(upload.single("file"), createCarouselImage);
router.route("/gettingcarouselimages").get(getCarouselImages);

//! deleting a single image
router.route("/deleteacarouselimage/:id").delete(deleteCarouselImage);
module.exports = router;
