import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setEditData,
} from "../../../redux/feature/productSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../../util/Loading";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, products, error } = useSelector((state) => state.productR);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const handleEdit = (productToEdit) => {
  //   if (confirm("Are You Sure Want to Edit")) {
  //     dispatch(setEditData(productToEdit));
  //     navigate("/dashboard/admin/add-new-product");
  //   }
  // };

  const deleteFunc = (id) => {
    if (confirm("Are you sure you want to delete?")) {
      dispatch(deleteProduct({ id }))
        .then(() => dispatch(fetchProducts()))
        .catch((error) => console.error("Failed to delete product:", error));
    }
  };

  // if (products.length === 0) {
  //   return (
  //     <p className="text-2xl py-4 text-center">
  //       No products available. please add some products!
  //     </p>
  //   );
  // }

  if (isLoading) {
    return <Loading />;
  }

  console.log(products);
  return (
    // <div className="max-w-7xl mx-auto p-4 space-y-6">
    //   {!isLoading &&
    //     !error &&
    //     products.map((product) => (
    //       <div
    //         className="bg-white shadow-lg rounded-lg overflow-hidden md:flex md:space-x-4"
    //         key={product._id}
    //       >
    //         <div className="md:w-1/3">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full h-48 object-cover md:h-full"
    //           />
    //         </div>
    //         <div className="p-4 md:w-2/3">
    //           <h5 className="text-xl font-semibold mb-2">
    //             Product name : {product.name}
    //           </h5>
    //           <p className="text-gray-700 mb-4">
    //             description : {product.description}
    //           </p>
    //           <p className="text-gray-700 mb-4">price : {product.price}</p>
    //           <p className="text-gray-700 mb-4">
    //             Quantity : {product.quantity}
    //           </p>
    //           <p className="text-gray-700 mb-4">Offer : {product.offer}</p>

    //           <p className="text-gray-700 mb-4">Image URL : {product.image}</p>
    //           <p className="text-gray-700 mb-4">
    //             Category : {product.category.name}
    //           </p>
    //           <div className="flex w-96 flex-col space-y-2 md:flex-row md:space-x-4">
    //             <button className="" onClick={() => handleEdit(product)}>
    //               Edit This Product
    //             </button>
    //             <button
    //               className="flex-1 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
    //               onClick={() => deleteFunc(product._id)}
    //             >
    //               Delete This Product
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   {isLoading && <p>Loading...</p>}
    //   {error && <p className="text-red-500">{error}</p>}
    // </div>

    <div>
      <p className="text-2xl py-4 text-center">Manage Products</p>

      <div className="flex justify-end">
        <Link
          to="add-new-product"
          className="relative inline-flex items-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add+
          </span>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Phone</td>
              <td className="px-6 py-4">$799</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
