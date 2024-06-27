const express = require("express");
const productRouter = express.Router();

//! multer middleware code  ------start------>
const multer = require("multer");
// const upload = multer({ dest: "./productimage" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./productimages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Math.round(Math.random() * 1e9)}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage});
//! multer middleware code  ------ends------>

const {
  productCreate,
  getProducts,
  getASingleProduct,
  deleteProduct
} = require("../controller/product-controller");

//! product route
productRouter
  .route("/createproduct")
  .post(upload.single("productimage") , productCreate);
productRouter.route("/getproducts").get(getProducts);
productRouter.route("/singleproduct/:id").get(getASingleProduct)
productRouter.route("/deleteproduct/:id").delete(deleteProduct)

module.exports = productRouter;
