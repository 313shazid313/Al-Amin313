import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setEditData,
} from "../../redux/feature/productSlice";
// import photo from "../../assets/nasa-rTZW4f02zY8-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { getImageURL } from "../../util/image-util"
const ViewProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, products, error } = useSelector((state) => state.productR);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (productToEdit) => {
    dispatch(setEditData(productToEdit));
    navigate("/dashboard/admin/add-new-product");
  };

  const deleteFunc = (id) => {
    dispatch(deleteProduct({ id }))
      .then(() => dispatch(fetchProducts()))
      .catch((error) => console.error("Failed to delete product:", error));
  };

  console.log(products)
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {!isLoading && !error && products.map((product) => (
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden md:flex md:space-x-4"
          key={product._id}
        >
          <div className="md:w-1/3">
            <img
              src={getImageURL(product.image)}
              alt={product.name}
              className="w-full h-48 object-cover md:h-full"
            />
          </div>
          <div className="p-4 md:w-2/3">
            <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
            <p className="text-gray-700 mb-4">
              This is a wider card with supporting text below as a natural lead-in.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              <small>Last updated 3 mins ago</small>
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => handleEdit(product)}
              >
                Edit This Product
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                onClick={() => deleteFunc(product._id)}
              >
                Delete This Product
              </button>
            </div>
          </div>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ViewProducts;
