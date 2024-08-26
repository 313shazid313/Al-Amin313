import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productSlics";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
  // console.log(categoryIdString);

  //* filtering products based on categoryId
  const filteredProducts = products.filter((value) => {
    return value.category._id === categoryIdString;
  });

  // console.log(filteredProducts);

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
                  <p>{product._id}</p>
                  <p>{product.category.name}</p>
                  <h1>{product.category._id}</h1>
                  <Link>Show Details</Link>
                </article>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CategoryBasedProducts;
