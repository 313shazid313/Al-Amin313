const express = require("express");
const router = express.Router();

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

const {
  categoruFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
} = require("../controller/category-controller");

//! admin login route
router.route("/adminreg").post(adminRegister);
router.route("/adminlog").post(adminLogin);

//! categoru route
router.route("/createcategory").post(categoruFuncCreate);
router.route("/allcategory").get(categoruFuncRead);
router.route("/delcategory/:id").delete(categoruFuncdel);
//!

module.exports = router;
