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

productRouter.route("/create-a-brand").post(brandCreate);
productRouter.route("/allbrands").get(brandRead);
productRouter.route("/update-a-brand/:id").put(brandUpdate);

productRouter.route("/create-an-origin").post(originCreate);
productRouter.route("/allorigins").get(originRead);
productRouter.route("/update-an-origin/:id").put(originUpdate);

productRouter.route("/create-a-type").post(typeCreate);
productRouter.route("/alltypes").get(typeRead);
productRouter.route("/update-a-type/:id").put(typeUpdate);

productRouter.route("/create-an-unit").post(unitCreate);
productRouter.route("/allunit").get(unitRead);
productRouter.route("/update-an-unit/:id").put(unitUpdate);

productRouter.route("/createproduct").post(productCreate);
productRouter.route("/getproducts").get(getProducts);
productRouter.route("/singleproduct/:id").get(getASingleProduct);
productRouter.route("/edit-product/:id").put(updateProduct);

module.exports = productRouter;
