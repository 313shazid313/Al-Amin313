const express = require("express");
const CategoryRouter = express.Router();


const {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
} = require("../controller/category-controller");

//! category route
CategoryRouter.route("/createcategory").post(categoryFuncCreate);
CategoryRouter.route("/allcategory").get(categoruFuncRead);
CategoryRouter.route("/delcategory/:id").delete(categoruFuncdel);


module.exports = CategoryRouter;
