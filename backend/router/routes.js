const express = require("express");
const router = express.Router();
//! a middleware --------->
const { upload } = require("../middleware/productImage");

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

const {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
} = require("../controller/category-controller");

const {
  productCreate,
  getProducts,
} = require("../controller/product-controller");

//! admin login route
router.route("/adminreg").post(adminRegister);
router.route("/adminlog").post(adminLogin);

//! category route
router.route("/createcategory").post(categoryFuncCreate);
router.route("/allcategory").get(categoruFuncRead);
router.route("/delcategory/:id").delete(categoruFuncdel);

//! product route
router.route("/createproduct").post(productCreate);
router.route("/getproducts").get(getProducts);

module.exports = router;
