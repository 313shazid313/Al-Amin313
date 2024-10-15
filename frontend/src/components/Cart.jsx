import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.cartR);
  console.log(carts);
  return (
    
    <div>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};

export default Cart;
