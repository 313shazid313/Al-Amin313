const multer = require("multer");

// //! multer start ---------->
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname);
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, `${Math.round(Math.random() * 1e9)}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// //! multer ends ---------->
module.exports = { upload };
