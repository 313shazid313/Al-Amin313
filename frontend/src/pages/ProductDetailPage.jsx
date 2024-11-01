import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchASingleProduct } from "../redux/feature/productSlice";
import { addToCart } from "../redux/feature/cartSlice";

const ProductDetailPage = () => {
  const { singleProduct, isLoading, error } = useSelector(
    (state) => state.productR
  );
  const dispatch = useDispatch();

  //? getting a target product id ------>
  const productId = useParams();
  //? getting a target product id ------>

  //? converting this  {id: '66c4aebc0ab20ae017bfbc11'}  to this 66c4aebc0ab20ae017bfbc11-->
  const idString = productId.id;
  //? converting this  {id: '66c4aebc0ab20ae017bfbc11'}  to this 66c4aebc0ab20ae017bfbc11-->
  useEffect(() => {
    dispatch(fetchASingleProduct(idString));
  }, [dispatch, idString]);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const addTocart = (e) => {
    dispatch(addToCart(e))
  }


  console.log(singleProduct);
  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="md:flex md:space-x-8">
        {/* Product Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.name || "Product Image"}
            className="w-full h-64 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 md:w-80 md:h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          {/* Product Name */}
          <h3 className="text-3xl font-semibold text-gray-800 leading-tight">
            {singleProduct?.name}
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-semibold">Description:</span> {singleProduct?.description}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-semibold">Category:</span> {singleProduct?.category.name}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-semibold">Status:</span> {singleProduct?.status}
          </p>

          {/* Price and Quantity */}
          <div className="text-lg font-semibold text-gray-800">
            <span className="text-gray-700 font-normal">Price:</span> ${singleProduct?.price}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addTocart(singleProduct)}
            className="mt-4 py-3 px-6 bg-[#FBBB2F] text-black font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#f5c254] hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FBBB2F] focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductDetailPage;
