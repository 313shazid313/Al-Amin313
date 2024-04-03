const express = require("express");
const router = express.Router();

const {
  adminRegister,
  adminLogin,
} = require("../controller/admin-log-reg-controller");

router.route("/adminreg").post(adminRegister);
router.route("/adminlog").post(adminLogin);

module.exports = router;
