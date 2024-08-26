import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../slices/categorySlice";
import productReducer from "../slices/productSlics";

export const store = configureStore({
  reducer: {
    categoryR: categoryReducer,
    productR: productReducer,
  },
});

export default store;
