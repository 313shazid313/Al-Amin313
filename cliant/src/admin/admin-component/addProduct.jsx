import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../redux/feature/categorySlice";
import { addNewProduct, updateProduct } from "../../redux/feature/productSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  // ? gettin edit data from viewProduct component with redux------>
  const editData = useSelector((state) => state.productR.editData);
  // console.log(editData);
  // console.log(editData.image);
  // console.log(editData._id)
  // ? gettin edit data from viewProduct component------>

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

  // ? placing edit data to the form start ----->
  useEffect(() => {
    if (editData) {
      setItems(editData);
    }
  }, [editData]);
  // ? placing edit data to the form end ----->

  // ? getting categories
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

    // Creating form data to send including the image file
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

    if (editData) {
      console.log(items._id);
      dispatch(updateProduct({ id: items._id, product: items }));
      console.log(items);
      navigate("/dashboard/admin/existing-products");
    } else {
      dispatch(addNewProduct(formData));
      navigate("/dashboard/admin/existing-products");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "60%", textAlign: "center", margin: "auto" }}
      >
        <div className="">
          <span className="" id="inputGroup-sizing-default">
            Name
          </span>
          <input
            type="text"
            className=""
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="name"
            value={items.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <span className="" id="inputGroup-sizing-default">
            Description
          </span>
          <textarea
            rows="4"
            type="text"
            className=""
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="description"
            value={items.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <span className="" id="inputGroup-sizing-default">
            Price
          </span>
          <input
            type="text"
            className=""
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="price"
            value={items.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <span className="" id="inputGroup-sizing-default">
            Quantity
          </span>
          <input
            type="number"
            className=""
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="quantity"
            value={items.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Offer
          </span>
          <input
            type="text"
            className=""
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="offer"
            value={items.offer}
            onChange={handleInputChange}
          />
        </div>

        {/* Status */}
        <select
          className=""
          aria-label="Default select example"
          name="status"
          value={items.status}
          onChange={handleInputChange}
        >
          <option defaultValue="DEFAULT" disabled>
            Status
          </option>
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>
        <br />

        {/* Category */}
        {/* Category */}
        <select
          className=""
          aria-label="Category"
          name="category"
          value={items.category || ""}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((categoryItem) => (
            <option key={categoryItem._id} value={categoryItem._id}>
              {categoryItem.name}
            </option>
          ))}
        </select>

        <br />

        {/* Image Upload */}
        <div className="">
          <label className="form-label">Add Product Image</label>
          <input
            className=""
            type="file"
            id="formFile"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          {editData ? "Edit Product" : "Add new Product"}
        </button>
        <br />
        <br />
      </form>
    </>
  );
};

export default AddProduct;
