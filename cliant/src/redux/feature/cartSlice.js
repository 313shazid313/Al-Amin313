import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartData");
    return serializedCart ? JSON.parse(serializedCart) : initialState;
  } catch (error) {
    console.error("Failed to load cart from localStorage", error);
    return initialState;
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cartData", serializedCart);
  } catch (error) {
    console.error("Failed to save cart to localStorage", error);
  }
};

const initialState = loadCartFromLocalStorage() || [];
// const initialState = {
//   cart:[],
//   selectedItems: 0,
//   totalPrice: 0,
// };

const calculateCartTotals = (cart) => {
  const selectedItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  return { selectedItems, totalPrice };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!isExist) {
        state.cart.push({ ...action.payload, quantity: 1 });
        alert("Product added successfully!");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Product already Added to Cart",
          icon: "error",
          confirmButtonText: "It's Ok",
        });
      }

      const totals = calculateCartTotals(state.cart);
      state.selectedItems = totals.selectedItems;
      state.totalPrice = totals.totalPrice;

      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const product = state.cart.find((item) => item._id === action.payload.id);
      if (product) {
        if (action.payload.type === "increment") {
          product.quantity += 1;
        } else if (
          action.payload.type === "decrement" &&
          product.quantity > 1
        ) {
          product.quantity -= 1;
        }
      }
      const totals = calculateCartTotals(state.cart);
      state.selectedItems = totals.selectedItems;
      state.totalPrice = totals.totalPrice;

      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload.id
      );
      const totals = calculateCartTotals(state.cart);
      state.selectedItems = totals.selectedItems;
      state.totalPrice = totals.totalPrice;

      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      Object.assign(state, initialState);

      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
