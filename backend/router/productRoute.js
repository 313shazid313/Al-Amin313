const express = require("express");
const router = express.Router();

const multer = require("multer");
// const upload = multer({ dest: "./bottomg_image" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './bottomg_image')
  },
  filename: function (req, file, cb) {
    cb(null, `${ Math.round(Math.random() * 1E9)}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage })

const {
  productCreate,
  getProducts,
} = require("../controller/product-controller");

//! product route
router.route("/createproduct").post(upload.single("imagefile"), productCreate);
router.route("/getproducts").get(getProducts);

module.exports = router;
