import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line no-unused-vars, react/prop-types
const ImageHandle = ({ name, setImage, label, id, value }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadSingleImage = async (base64) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:7230/uploadimage", { image: base64 });
      const imageURL = res.data;
      console.log(imageURL);
      setUrl(imageURL);
      alert("Uploading image successful");
      setImage(imageURL);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (e) => {
    const imageFiles = e.target.files;
    console.log(imageFiles);
    if (imageFiles.length === 1) {
      const base64 = await convertBase64(imageFiles[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (let i = 0; i < imageFiles.length; i++) {
      const base = await convertBase64(imageFiles[i]);
      base64s.push(base);
    }
    // Further processing for multiple images if required
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        onChange={uploadImage}
        name={name}
        id={name}
        type="file"
        className="add-product-InputCSS"
        multiple // add if you intend to support multiple images
      />
      {loading && <p>Loading...</p>}
      {
        url && (
          <div>
            <p>Image uploaded successfully!</p>
            <img src={url} alt="uploaded image" />
          </div>
        )
      }
    </div>
  );
};

export default ImageHandle;
