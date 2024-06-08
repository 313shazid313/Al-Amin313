const {
  createCarouselImage,
  getCarouselImages,
  deleteCarouselImage
} = require("../controller/carousel-image-controller");

const express = require("express");
const router = express.Router();


//! multer middleware start ---------->
const multer = require("multer");
// const upload = multer({ dest: "./images" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './carouselimages')
  },
  filename: function (req, file, cb) {
    cb(null, `${ Math.round(Math.random() * 1E9)}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage })

//! multer middleware ends ---------->

router.route("/upload").post(upload.single("file"), createCarouselImage);
router.route("/gettingcarouselimages").get(getCarouselImages);

//! deleting a single image
router.route("/deleteacarouselimage/:id").delete(deleteCarouselImage);
module.exports = router;
