import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../../slices/categorySlice";
import { addNewProduct } from "../../../slices/productSlics";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categoryR);
  const [items, setItems] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    productimage: "",
    offer: "",
    status: "",
  });

  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItems({
      ...items,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data to send including the image file
    const formData = new FormData();
    formData.append("name", items.name);
    formData.append("description", items.description);
    formData.append("price", items.price);
    formData.append("quantity", items.quantity);
    formData.append("category", items.category);
    formData.append("offer", items.offer);
    formData.append("status", items.status);
    if (image) {
      formData.append("productimage", image);
    }

    // Dispatch action to add a new product
    dispatch(addNewProduct(formData));
    if (dispatch(addNewProduct(formData))) {
      navigate("/dashboard/admin/existing-products");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "60%", textAlign: "center", margin: "auto" }}
      >
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="name"
            value={items.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Description
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="description"
            value={items.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Price
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="price"
            value={items.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Quantity
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="quantity"
            value={items.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Offer
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="offer"
            value={items.offer}
            onChange={handleInputChange}
          />
        </div>

        {/* Status */}
        <select
          className="form-select"
          aria-label="Default select example"
          name="status"
          value={items.status}
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            Status
          </option>
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>
        <br />

        {/* Category */}
        <select
          className="form-select"
          aria-label="Category"
          name="category"
          value={items.category}
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            Add Category
          </option>
          {categories.map((categoryItem) => (
            <option key={categoryItem._id} value={categoryItem._id}>
              {categoryItem.name}
            </option>
          ))}
        </select>
        <br />

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label">Add Product Image</label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Add New Product
        </button>
        <br />
        <br />
      </form>
    
    </>
  );
};

export default AddProduct;
