import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import categoryReducer from "./feature/categorySlice";
import productReducer from "./feature/productSlice";
import cartReducer from "./feature/cartSlice";
import authReducer from "../redux/auth/authSlice";
import brandApi from "./product-additional-state/brandApi";
import categoryApi from "./product-additional-state/categoryApi";
import unitApi from "./product-additional-state/unitApi";
import originApi from "./product-additional-state/originApi";
import typeApi from "./product-additional-state/typeApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    categoryR: categoryReducer,
    productR: productReducer,
    cartR: cartReducer,
    auth: authReducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [originApi.reducerPath]: originApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
