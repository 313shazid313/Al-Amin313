const express = require("express");
const router = express.Router();

const { upload } = require("../middleware/multerMiddleware");

const {
  productCreate,
  getProducts,
} = require("../controller/product-controller");

//! product route
router.route("/createproduct").post(upload.single("imagefile"), productCreate);
router.route("/getproducts").get(getProducts);

module.exports = router;
