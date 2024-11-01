const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dtyheyl6n",
  api_key: "869958822369318",
  api_secret: "9AGX3lMwN8DdaJ1E9_dtkU4KGDI",
});

const options = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

module.exports = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, options, (error, result) => {
      if (result && result.secure_url) {
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};
