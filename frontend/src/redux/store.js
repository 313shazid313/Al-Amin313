import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import categoryReducer from "./feature/categorySlice";
import productReducer from "./feature/productSlice";
import cartReducer from "./feature/cartSlice";
import authReducer from "../redux/auth/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    categoryR: categoryReducer,
    productR: productReducer,
    cartR: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
