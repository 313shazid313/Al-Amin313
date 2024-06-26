// packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  message: "Too manu request, please try again later",
});

// middleware
app.use(rateLimiter);
// app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(cors());
app.use(morgan());
app.use(express.json());

dotenv.config();

const Routes = require("./router/routes");
const carouselImageRoute = require("./router/carouselImageRoutes");
const productRoute = require("./router/productRoute");
const { responseForError } = require("./controller/res-controller");

mongoose
  .connect("mongodb://127.0.0.1:27017/alAmin")
  .then(() => {
    console.table("connected");
    app.listen(process.env.PORT || 7290, () => {
      console.log(`lisenng at port ${process.env.PORT || 7290}`);
    });
  })
  .catch((error) => {
    console.log("failed", error);
  });

app.use("/", Routes);
app.use("/images", carouselImageRoute);
app.use("/products", productRoute);

app.use((req, res, next) => {
  return next(createError(404, "route not found"));
});

app.use((err, req, res, next) => {
  //? seprate error handeling
  return responseForError(res, {
    statusCode: err.status,
    message: err.message,
  });
});
