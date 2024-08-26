import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../slices/categorySlice";

export const store = configureStore({
  reducer: {
    categoryR: categoryReducer,
  },
});

export default store;
