const express = require("express");
const router = express.Router();

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

const {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
} = require("../controller/category-controller");


//! admin login route
router.route("/adminreg").post(adminRegister);
router.route("/adminlog").post(adminLogin);

//! category route
router.route("/createcategory").post(categoryFuncCreate);
router.route("/allcategory").get(categoruFuncRead);
router.route("/delcategory/:id").delete(categoruFuncdel);



module.exports = router;
