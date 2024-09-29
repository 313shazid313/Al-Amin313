import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.cartR);
  console.log(carts);
  return (
    <>
        
    </>
  )
}

export default Cart