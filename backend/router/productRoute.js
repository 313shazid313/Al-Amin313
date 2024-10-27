const express = require("express");
const productRouter = express.Router();

//! multer middleware code  ------start------>
const multer = require("multer");
// const upload = multer({ dest: "./productimage" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../cliant/src/assets/product-image");
  },
  filename: function (req, file, cb) {
    cb(null, `${Math.round(Math.random() * 1e9)}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
//! multer middleware code  ------ends------>

const {
  productCreate,
  getProducts,
  getASingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product-controller");

//! if i make a post request and use middleware
//! its patch/put request wont work if i didnt use that middleware
//! i should be careful

//! product route
productRouter
  .route("/createproduct")
  .post(upload.single("productimage"), productCreate);
productRouter.route("/getproducts").get(getProducts);
productRouter.route("/singleproduct/:id").get(getASingleProduct);
productRouter.route("/deleteproduct/:id").delete(deleteProduct);
productRouter
  .route("/edit-product/:id")
  .put(upload.single("productimage"), updateProduct);

module.exports = productRouter;
