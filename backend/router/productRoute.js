const express = require("express");
const productRouter = express.Router();

const {
  productCreate,
  getProducts,
  getASingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product-controller");

const {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
  categoryFuncUpdate,
} = require("../controller/product-additionals-conteroller/category-controller");

const {
  brandCreate,
  brandRead,
  brandDelete,
  brandUpdate,
} = require("../controller/product-additionals-conteroller/brand-controller");

//! if i make a post request and use middleware
//! its patch/put request wont work if i didnt use that middleware
//! i should be careful

//! product route
productRouter.route("/createcategory").post(categoryFuncCreate);
productRouter.route("/allcategory").get(categoruFuncRead);
productRouter.route("/delcategory/:id").delete(categoruFuncdel);
productRouter.route("/update-category/:id").put(categoryFuncUpdate);

productRouter.route("/create-a-brand").post(brandCreate);
productRouter.route("/allbrands").get(brandRead);
productRouter.route("/update-a-brand/:id").put(brandUpdate);

productRouter.route("/createproduct").post(productCreate);
productRouter.route("/getproducts").get(getProducts);
productRouter.route("/singleproduct/:id").get(getASingleProduct);
productRouter.route("/deleteproduct/:id").delete(deleteProduct);
productRouter.route("/edit-product/:id").put(updateProduct);

module.exports = productRouter;
