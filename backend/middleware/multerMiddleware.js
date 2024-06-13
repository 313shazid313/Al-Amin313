//! multer middleware start ---------->
const multer = require("multer");
// const upload = multer({ dest: "./images" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./carouselimages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Math.round(Math.random() * 1e9)}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//! multer middleware ends ---------->

module.exports = { upload };
