import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/feature/productSlice";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../redux/feature/cartSlice";
import photo from "../assets/nasa-rTZW4f02zY8-unsplash.jpg";

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
      
      <div className="container mx-auto px-4 py-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {!isLoading &&
            filteredProducts.map((product) => (
              <article 
                key={product._id} 
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <img src={photo} alt={product.name} className="w-full h-48 object-cover" />
        
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800">{product.name}</h5>
                  <p className="text-gray-500">{product.category.name}</p>

                  <div className="flex justify-between items-center mt-4">
                    <Link 
                      to={`/category/${product.category._id}/${product._id}`} 
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Show Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Add To Cart
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
