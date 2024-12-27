const express = require("express");
const CategoryRouter = express.Router();

const {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
  categoryFuncUpdate,
} = require("../../controller/product-additionals-conteroller/category-controller");

//! category route
CategoryRouter.route("/createcategory").post(categoryFuncCreate);
CategoryRouter.route("/allcategory").get(categoruFuncRead);
CategoryRouter.route("/delcategory/:id").delete(categoruFuncdel);
CategoryRouter.route("/update-category/:id").put(categoryFuncUpdate);

module.exports = CategoryRouter;
