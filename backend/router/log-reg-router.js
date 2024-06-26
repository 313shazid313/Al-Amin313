const express = require("express");
const router = express.Router();

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

//! admin login route
router.route("/adminreg").post(adminRegister);
router.route("/adminlog").post(adminLogin);
