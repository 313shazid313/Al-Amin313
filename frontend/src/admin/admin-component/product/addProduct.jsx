import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../../redux/feature/categorySlice";
import { addNewProduct, updateProduct } from "../../../redux/feature/productSlice";
import { useNavigate } from "react-router-dom";
import ImageHandle from "../ImageHandle";

const AddProduct = () => {
  const navigate = useNavigate();
  const editData = useSelector((state) => state.productR.editData);
  const { categories } = useSelector((state) => state.categoryR);

  const [image, setImage] = useState("");
  const [items, setItems] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    offer: "",
    status: "",
    image: "", // Add image field to items state
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setItems(editData);
      setImage(editData.image || "");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !items.name ||
      !items.category ||
      !items.price ||
      !items.status ||
      !items.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const productData = { ...items, image }; // Add image URL to product data

      if (editData) {
        dispatch(updateProduct({ id: items._id, product: productData }));
        alert("Product updated successfully!");
        navigate("/dashboard/admin/product-table");
      } else {
        dispatch(addNewProduct(productData));
        alert("Product added successfully!");
        navigate("/dashboard/admin/product-table");
      }

      setItems({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        offer: "",
        status: "",
        image: "",
      });
      setImage(""); // Clear the image state
    } catch (error) {
      console.error("Failed to add or update product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {editData ? "Edit Product" : "Add New Product"}
      </h2>

      {/* Horizontal Grouping for Name and Price */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 flex-col space-y-1">
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

        <div className="flex flex-1 flex-col space-y-1">
          <label className="text-gray-600 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={items.price}
            onChange={handleInputChange}
            required
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Horizontal Grouping for Quantity and Offer */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 flex-col space-y-1">
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

        <div className="flex flex-1 flex-col space-y-1">
          <label className="text-gray-600 font-semibold">Offer</label>
          <input
            type="text"
            name="offer"
            value={items.offer}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Horizontal Grouping for Status and Category */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 flex-col space-y-1">
          <label className="text-gray-600 font-semibold">Status</label>
          <select
            name="status"
            value={items.status}
            onChange={handleInputChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="available">Available</option>
            <option value="not available">Not Available</option>
          </select>
        </div>

        <div className="flex flex-1 flex-col space-y-1">
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

      {/* Image Upload */}
      <div className="flex flex-col space-y-1">
        <ImageHandle
          label="Image"
          name="image"
          id="image"
          value={image}
          placeholder="Upload image"
          setImage={setImage}
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
