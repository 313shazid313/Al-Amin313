import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.cartR);
  console.log(carts);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8">
            
          </div>
          <div className="col-6 col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
