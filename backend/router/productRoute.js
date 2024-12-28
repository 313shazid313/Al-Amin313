const express = require("express");
const productRouter = express.Router();

const {
  productCreate,
  getProducts,
  getASingleProduct,
  updateProduct,
} = require("../controller/product-controller/product-controller");

const {
  categoryFuncCreate,
  categoruFuncRead,
  categoryFuncUpdate,
  getSingleCategory,
} = require("../controller/product-controller/product-additionals-conteroller/category-controller");

const {
  brandCreate,
  brandRead,
  brandUpdate,
  getSingleBrand,
} = require("../controller/product-controller/product-additionals-conteroller/brand-controller");

const {
  originCreate,
  originRead,
  originUpdate,
  getSingleOrigin,
} = require("../controller/product-controller/product-additionals-conteroller/origin-controller");

const {
  typeCreate,
  typeRead,
  typeUpdate,
  getSingleType,
} = require("../controller/product-controller/product-additionals-conteroller/type-controller");

const {
  unitCreate,
  unitRead,
  unitUpdate,
  getSingleUnit,
} = require("../controller/product-controller/product-additionals-conteroller/unit-controller");

//? if i make a post request and use middleware
//? its patch/put request wont work if i didnt use that middleware
//? i should be careful

//! product route
productRouter.route("/create-category").post(categoryFuncCreate);
productRouter.route("/all-category").get(categoruFuncRead);
productRouter.route("/update-category/:id").put(categoryFuncUpdate);
productRouter.route("/single-category/:id").put(getSingleCategory);

productRouter.route("/create-brand").post(brandCreate);
productRouter.route("/allbrands").get(brandRead);
productRouter.route("/update-brand/:id").put(brandUpdate);
productRouter.route("/single-brand/:id").put(getSingleBrand);

productRouter.route("/create-origin").post(originCreate);
productRouter.route("/allorigins").get(originRead);
productRouter.route("/update-origin/:id").put(originUpdate);
productRouter.route("/single-origin/:id").put(getSingleOrigin);

productRouter.route("/create-type").post(typeCreate);
productRouter.route("/alltypes").get(typeRead);
productRouter.route("/update-type/:id").put(typeUpdate);
productRouter.route("/single-type/:id").put(getSingleType);

productRouter.route("/create-unit").post(unitCreate);
productRouter.route("/allunit").get(unitRead);
productRouter.route("/single-unit/:id").put(getSingleUnit);
productRouter.route("/update-unit/:id").put(unitUpdate);

productRouter.route("/create-product").post(productCreate);
productRouter.route("/allproducts").get(getProducts);
productRouter.route("/single-product/:id").get(getASingleProduct);
productRouter.route("/update-product/:id").put(updateProduct);

module.exports = productRouter;
