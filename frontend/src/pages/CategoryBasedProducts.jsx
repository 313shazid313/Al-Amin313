import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productSlics";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";

const CategoryBasedProducts = () => {
  const { isLoading, products, error } = useSelector((state) => state.productR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);

  // * getting categoryId as params but in object
  const categoryId = useParams();
  // console.log(categoryId);

  // * converting categoryId from objects to string
  const categoryIdString = categoryId.id;
  console.log(categoryIdString);

  //* filtering products based on categoryId

  const filteredProducts = Array.isArray(products)
    ? products.filter((value) => value.category._id === categoryIdString)
    : [];

  // console.log(filteredProducts);

  const clickedProduct = (product) => {
    const productId = product;
    const productObject = {
      product: productId,
    };

    dispatch(addToCart(productObject));
  };
  return (
    <>
      {isLoading && <h3>Loading .....</h3>}
      {error && <h3>{error}</h3>}
      <div className="centeredNav">
        <div>
          {!isLoading &&
            filteredProducts.map((product) => {
              return (
                <article key={product._id}>
                  <h5>{product.name}</h5>
                  <p>product Id : {product._id}</p>
                  <p>{product.category.name}</p>
                  <h4>category id : {product.category._id}</h4>
                  <Link to={`/category/${product.category._id}/${product._id}`}>
                    Show Details
                  </Link>

                  <button
                    onClick={() => {
                      clickedProduct(product._id);
                    }}
                    className="cart-button"
                  >
                    Add To Cart
                  </button>
                </article>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CategoryBasedProducts;
