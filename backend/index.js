const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(cors());
app.use(morgan());

dotenv.config();

const Routes = require("./router/routes");
const carouselImageRoute = require("./router/carouselImageRoutes");
const productRoute = require("./router/productRoute");

mongoose
  .connect("mongodb://127.0.0.1:27017/alAmin")
  .then(() => {
    console.table("connected");
    app.listen(process.env.PORT, () => {
      console.log(`lisenng at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("failed", error);
  });

app.use("/", Routes);
app.use("/images", carouselImageRoute);
app.use("/products", productRoute);
