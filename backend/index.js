const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(cors());

dotenv.config();

const adminAuthRoute = require("./router/admin-login-router");

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

app.use("/", adminAuthRoute);
