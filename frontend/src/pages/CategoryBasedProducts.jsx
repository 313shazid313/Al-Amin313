import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/feature/productSlice";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../redux/feature/cartSlice";


const CategoryBasedProducts = () => {
  const { isLoading, products, error } = useSelector((state) => state.productR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { id: categoryId } = useParams();

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => product.category?._id === categoryId)
    : [];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {isLoading && <h3 className="text-center text-gray-500">Loading .....</h3>}
      {error && <h3 className="text-center text-red-500">{error}</h3>}

      <div className="container mx-auto m-12 px-4 py-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {!isLoading &&
            filteredProducts.map((product) => (
              <article
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200  "
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <span className="absolute top-2 right-2 bg-[#FEBD2F] text-white text-xs font-bold px-2 py-1 rounded-md">
                    {product.offer ? `${product.offer} Off` : "New"}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h5 className="text-xl font-bold text-gray-800">{product.name}</h5>
                  <p className="text-gray-600 text-sm font-medium">Category: <span className="font-semibold">{product.category.name}</span></p>
                  <p className="text-gray-800 font-semibold text-lg">Price: ${product.price}</p>

                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={`/category/${product.category._id}/${product._id}`}
                      className="text-[#bb8b23] font-medium hover:text-[#FEBD2F] transition-colors"
                    >
                      Show Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-[#bb8b23] text-white font-semibold rounded-lg hover:bg-[#FEBD2F] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>

    </>
  );
};

export default CategoryBasedProducts;
