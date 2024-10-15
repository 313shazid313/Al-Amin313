import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./feature/categorySlice";
import productReducer from "./feature/productSlice";
import cartReducer from "./feature/cartSlice";

export const store = configureStore({
  reducer: {
    categoryR: categoryReducer,
    productR: productReducer,
    cartR: cartReducer,
  },
});

export default store;
