import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchASingleProduct } from "../redux/feature/productSlice";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  const { products } = useSelector((state) => state.productR);
  const dispatch = useDispatch();

  //? getting a target product id ------>
  const productId = useParams();
  console.log(productId);
  //? getting a target product id ------>

  //? converting this  {id: '66c4aebc0ab20ae017bfbc11'}  to this 66c4aebc0ab20ae017bfbc11-->
  const idString = productId.id;
  //? converting this  {id: '66c4aebc0ab20ae017bfbc11'}  to this 66c4aebc0ab20ae017bfbc11-->

  useEffect(() => {
    dispatch(fetchASingleProduct(idString));
  }, []);
  // console.log(products);

  return (
    <>
      <h3>{products.name}</h3>
      <h3>{products.description}</h3>
      <h3>{products.price}</h3>
      <h3>{products.quantity}</h3>
    </>
  );
};

export default ProductDetailPage;
