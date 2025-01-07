import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import productReducer from "./feature/productSlice";
import cartReducer from "./feature/cartSlice";
import authReducer from "../redux/auth/authSlice";
import brandApi from "./product-additional-state/brandApi";
import categoryApi from "./product-additional-state/categoryApi";
import unitApi from "./product-additional-state/unitApi";
import originApi from "./product-additional-state/originApi";
import typeApi from "./product-additional-state/typeApi";
import productApi from "./rtk/productApi";
import stockApi from "./additionals-state/stockApi";
import cartonApi from "./additionals-state/cartonApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    productR: productReducer,
    cartR: cartReducer,
    auth: authReducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [originApi.reducerPath]: originApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [cartonApi.reducerPath]: cartonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      brandApi.middleware,
      categoryApi.middleware,
      originApi.middleware,
      typeApi.middleware,
      unitApi.middleware,
      productApi.middleware,
      stockApi.middleware,
      cartonApi.middleware
    ),
});

export default store;
