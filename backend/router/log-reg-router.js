const express = require("express");
const adminRouter = express.Router();

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

//! admin login route
adminRouter.route("/adminreg").post(adminRegister);
adminRouter.route("/adminlog").post(adminLogin);


module.exports = adminRouter