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
additionalsRoute.route("/read-review").get(reviewRead);
additionalsRoute.route("/update-review/:id").put(reviewUpdate);
additionalsRoute.route("/single-review/:id").get(getSingleReview);

additionalsRoute.route("/create-damage").post(damageCreate);
additionalsRoute.route("/read-damage").get(damageRead);
additionalsRoute.route("/update-damage/:id").put(damageUpdate);
additionalsRoute.route("/single-damage/:id").get(getSingleDamage);

additionalsRoute.route("/create-delivery").post(deliveryCreate);
additionalsRoute.route("/read-delivery").get(deliveryRead);
additionalsRoute.route("/update-delivery/:id").put(deliveryUpdate);
additionalsRoute.route("/single-delivery/:id").get(getSingleDelivery);

additionalsRoute.route("/create-slidead").post(slideAdCreate);
additionalsRoute.route("/read-slidead").get(slideAdRead);
additionalsRoute.route("/update-slidead/:id").put(slideAdUpdate);
additionalsRoute.route("/single-slidead/:id").get(getSingleSlideAd);

additionalsRoute.route("/create-stock").post(stockCreate);
additionalsRoute.route("/read-stock").get(stockRead);
additionalsRoute.route("/update-stock/:id").put(stockUpdate);
additionalsRoute.route("/single-stock/:id").get(getSingleStock);

additionalsRoute.route("/create-supplier").post(supplierCreate);
additionalsRoute.route("/read-supplier").get(supplierRead);
additionalsRoute.route("/update-supplier/:id").put(supplierUpdate);
additionalsRoute.route("/single-supplier/:id").get(getSingleSupplier);

module.exports = additionalsRoute;
