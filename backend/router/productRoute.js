const express = require("express");
const productRouter = express.Router();


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
productRouter.route("/createproduct").post(productCreate);

productRouter.route("/getproducts").get(getProducts);

productRouter.route("/singleproduct/:id").get(getASingleProduct);

productRouter.route("/deleteproduct/:id").delete(deleteProduct);


productRouter.route("/edit-product/:id").put(updateProduct);

module.exports = productRouter;
