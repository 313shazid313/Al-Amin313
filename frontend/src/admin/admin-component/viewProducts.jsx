import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setEditData,
} from "../../redux/feature/productSlice";
import { useNavigate } from "react-router-dom";


const ViewProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, products, error } = useSelector((state) => state.productR);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (productToEdit) => {

    if (confirm("Are You Sure Want to Edit")) {
      dispatch(setEditData(productToEdit));
      navigate("/dashboard/admin/add-new-product");
    }

  };

  const deleteFunc = (id) => {
    if (confirm("Are you sure you want to delete?")) {
      dispatch(deleteProduct({ id }))
        .then(() => dispatch(fetchProducts()))
        .catch((error) => console.error("Failed to delete product:", error));
    }
  };


  if (products.length === 0) {
    return <p className="text-4xl">No products available. please add some products!</p>;
  }


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
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover md:h-full"
            />
          </div>
          <div className="p-4 md:w-2/3">
            <h5 className="text-xl font-semibold mb-2">Product name : {product.name}</h5>
            <p className="text-gray-700 mb-4">
              description : {product.description}
            </p>
            <p className="text-gray-700 mb-4">
              price : {product.price}
            </p>
            <p className="text-gray-700 mb-4">
              Quantity : {product.quantity}
            </p>
            <p className="text-gray-700 mb-4">
              Offer : {product.offer}
            </p>

            <p className="text-gray-700 mb-4">
              Image URL : {product.image}
            </p>
            <p className="text-gray-700 mb-4">
              Category : {product.category.name}
            </p>
            <div className="flex w-96 flex-col space-y-2 md:flex-row md:space-x-4">
              <button
                className=""
                onClick={() => handleEdit(product)}
              >
                Edit This Product
              </button>
              <button
                className="flex-1 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
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
