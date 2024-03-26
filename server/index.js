const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(cors());
dotenv.config();

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