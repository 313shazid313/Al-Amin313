const express = require("express");
const additionalsRoute = express.Router();

const {
  reviewCreate,
  reviewRead,
  reviewUpdate,
  getSingleReview,
} = require("../controller/additionals-controller/cliantreview-controller");

const {
  damageCreate,
  damageRead,
  damageUpdate,
  getSingleDamage,
} = require("../controller/additionals-controller/damage-controller");

const {
  deliveryCreate,
  deliveryRead,
  deliveryUpdate,
  getSingleDelivery,
} = require("../controller/additionals-controller/delevery-controller");

const {
  slideAdCreate,
  slideAdRead,
  slideAdUpdate,
  getSingleSlideAd,
} = require("../controller/additionals-controller/slide-ad-controller");

const {
  stockCreate,
  stockRead,
  stockUpdate,
  getSingleStock,
} = require("../controller/additionals-controller/stock-contoller");

const {
  supplierCreate,
  supplierRead,
  supplierUpdate,
  getSingleSupplier,
} = require("../controller/additionals-controller/supplier-controller");

additionalsRoute.route("/create-review").post(reviewCreate);
additionalsRoute.route("/read-review").post(reviewRead);
additionalsRoute.route("/update-review").post(reviewUpdate);

additionalsRoute.route("/create-damage").post(damageCreate);
additionalsRoute.route("/read-damage").post(damageRead);
additionalsRoute.route("/update-damage").post(damageUpdate);

additionalsRoute.route("/create-delivery").post(deliveryCreate);
additionalsRoute.route("/read-delivery").post(deliveryRead);
additionalsRoute.route("/update-delivery").post(deliveryUpdate);

additionalsRoute.route("/create-slidead").post(slideAdCreate);
additionalsRoute.route("/read-slidead").post(slideAdRead);
additionalsRoute.route("/update-slidead").post(slideAdUpdate);

additionalsRoute.route("/create-stock").post(stockCreate);
additionalsRoute.route("/read-stock").post(stockRead);
additionalsRoute.route("/update-stock").post(stockUpdate);

additionalsRoute.route("/create-supplier").post(supplierCreate);
additionalsRoute.route("/read-supplier").post(supplierRead);
additionalsRoute.route("/update-supplier").post(supplierUpdate);

module.exports = additionalsRoute;
