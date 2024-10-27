import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../redux/feature/categorySlice";
import { addNewProduct, updateProduct } from "../../redux/feature/productSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const editData = useSelector((state) => state.productR.editData);
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
    if (editData) {
      setItems(editData);
    }
  }, [editData]);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
      dispatch(updateProduct({ id: items._id, product: items }));
      navigate("/dashboard/admin/existing-products");
    } else {
      dispatch(addNewProduct(formData));
      navigate("/dashboard/admin/existing-products");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {editData ? "Edit Product" : "Add New Product"}
      </h2>

      {/* Name */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={items.name}
          onChange={handleInputChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Description</label>
        <textarea
          rows="4"
          name="description"
          value={items.description}
          onChange={handleInputChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Price</label>
        <input
          type="text"
          name="price"
          value={items.price}
          onChange={handleInputChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Quantity */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={items.quantity}
          onChange={handleInputChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Offer */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Offer</label>
        <input
          type="text"
          name="offer"
          value={items.offer}
          onChange={handleInputChange}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Status */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Status</label>
        <select
          name="status"
          value={items.status}
          onChange={handleInputChange}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>
            Status
          </option>
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Category</label>
        <select
          name="category"
          value={items.category || ""}
          onChange={handleInputChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      </div>

      {/* Image Upload */}
      <div className="flex flex-col space-y-1">
        <label className="text-gray-600 font-semibold">Add Product Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {editData ? "Edit Product" : "Add New Product"}
      </button>
    </form>
  );
};

export default AddProduct;
