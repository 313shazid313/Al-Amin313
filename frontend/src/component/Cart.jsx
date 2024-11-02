import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/feature/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
    console.log(type);
    console.log(id);
  };

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };

  // ?
  const { cart, selectedItems, totalPrice } = useSelector((state) => state.cartR);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="container mx-auto p-4 m-40">
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-out"
          style={{
            transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl font-semibold">Your Cart</h4>
            </div>
            <div className="cart-items">
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md p-4 mb-4 rounded-lg bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="mr-4 px-2 py-1 bg-primary text-white rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <img
                        src={product?.image}
                        alt="product"
                        className="w-16 h-16 object-cover mr-4 rounded-lg"
                      />
                      <div>
                        <h5 className="text-lg font-medium">{product?.name}</h5>
                        <p className="text-gray-600 text-sm">${product?.price}</p>
                      </div>
                    </div>

                    <div className="flex flex-row md:justify-start justify-end items-center mt-2 md:mt-0">
                      <button
                        onClick={() => handleUpdateQuantity("decrement", product?._id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700"
                      >
                        -
                      </button>
                      <span className="px-4 text-center">{product?.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity("increment", product?._id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700"
                      >
                        +
                      </button>
                      <button
                        onClick={(e) => handleRemoveFromCart(e, product?._id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="bg-gray-100 rounded-lg mt-5 p-4">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-gray-800">Order Summary</h1>
                  <p className="text-gray-700 mt-2">Selected Items: {selectedItems}</p>
                  <p className="text-gray-700 mt-2">Total Price: ${totalPrice ? totalPrice.toFixed(2) : "0.00"}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearCart();
                    }}
                    className="bg-red-500 px-3 py-2 text-white rounded-md flex justify-center items-center hover:bg-red-600"
                  >
                    <span className="mr-2">Clear Cart</span>
                    <i className="ri-delete-bin-line"></i>
                  </button>
                  <button
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   makePayment();
                    // }}
                    className="bg-green-600 px-3 py-2 text-white rounded-md flex justify-center items-center hover:bg-green-700"
                  >
                    <span className="mr-2">Proceed Checkout</span>
                    <i className="ri-bank-card-line"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

  );
};

export default Cart;
