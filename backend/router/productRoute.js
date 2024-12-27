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
  brandUpdate,
} = require("../controller/product-additionals-conteroller/brand-controller");

const {
  originCreate,
  originRead,
  originUpdate,
} = require("../controller/product-additionals-conteroller/origin-controller");

const {
  typeCreate,
  typeRead,
  typeUpdate,
} = require("../controller/product-additionals-conteroller/type-controller");

const {
  unitCreate,
  unitRead,
  unitUpdate,
} = require("../controller/product-additionals-conteroller/unit-controller");

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
productRouter.route("/deleteproduct/:id").delete(deleteProduct);
productRouter.route("/edit-product/:id").put(updateProduct);

module.exports = productRouter;
