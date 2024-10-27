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
    <div className="max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-lg shadow-md">
      <div className="md:flex md:space-x-8">
        {/* Product Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.name || "Product Image"}
            className="w-full h-64 object-cover rounded-lg shadow-md md:w-80 md:h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          {/* Product Name */}
          <h3 className="text-2xl font-semibold text-gray-800">
            {singleProduct?.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {singleProduct?.description}
          </p>

          {/* Price and Quantity */}
          <div className="space-y-2">
            <div className="text-lg font-medium text-gray-800">
              <span className="text-gray-700">Price:</span> $
              {singleProduct?.price}
            </div>
            <div className="text-lg font-medium text-gray-800">
              <span className="text-gray-700">Quantity:</span>{" "}
              {singleProduct?.quantity}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button onClick={()=>{addTocart(singleProduct)}} className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
