import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../slices/categorySlice";
import productReducer from "../slices/productSlics";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    categoryR: categoryReducer,
    productR: productReducer,
    cartR: cartReducer,
  },
});

export default store;
