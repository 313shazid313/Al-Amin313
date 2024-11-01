import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// Define initialState first
const initialState = {
  cart: [],
  selectedItems: 0,
  totalPrice: 0,
};

// Load cart data from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartData");
    return serializedCart ? JSON.parse(serializedCart) : initialState;
  } catch (error) {
    console.error("Failed to load cart from localStorage", error);
    return initialState; // Use initialState as a fallback
  }
};

// Save cart data to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cartData", serializedCart);
  } catch (error) {
    console.error("Failed to save cart to localStorage", error);
  }
};

// Load cart from localStorage (this is where initialState is now used correctly)
const loadedCart = loadCartFromLocalStorage();

// Update initialState with loaded cart data
const stateWithLoadedCart = {
  ...initialState,
  cart: loadedCart.cart || [], // Ensure cart is an array
  selectedItems: loadedCart.selectedItems || 0,
  totalPrice: loadedCart.totalPrice || 0,
};

// Cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: stateWithLoadedCart,
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
          text: "Product already added to cart",
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
        } else if (action.payload.type === "decrement" && product.quantity > 1) {
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

// Helper function to calculate totals
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

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
