import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/feature/cartSlice";

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
  const { cart } = useSelector((state) => state.cartR);

  return (
    <>
      <div className="">
        <div
          className=""
          style={{
            transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">Your Cart</h4>
              <button className="text-gray-600 hover:text-gray-900">
                <i className="ri-xrp-fill bg-black p-1 text-white"></i>
              </button>
            </div>
            <div className="cart-items">
              {cart === null ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4"
                  >
                    <div className="flex items-center">
                      <span className="mr-4 px-1 bg-primary text-white rounded-full">
                        0{index + 1}
                      </span>
                      <img
                        src={product?.image}
                        alt="image"
                        className="size-12 object-cover mr-4"
                      />
                      <div>
                        <h5 className="text-lg font-medium">{product?.name}</h5>
                        <p className="text-gray-600 text-sm">
                          ${product?.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row md:justify-start justify-end items-center mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity("decrement", product?._id)
                        }
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700  ml-8"
                      >
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {product?.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity("increment", product?._id)
                        }
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700  "
                      >
                        +
                      </button>
                      <div className="ml-5">
                        <button
                          onClick={(e) => handleRemoveFromCart(e, product?._id)}
                          className="text-red-500 hover:text-red-700 mr-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* {
                    products.length > 0 && <OrderSummary />
                } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;