import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:7230/products/getproducts");
    return res.data;
  }
);

export const fetchASingleProduct = createAsyncThunk(
  "products/fetchASingleProduct",
  async (id) => {
    const res = await axios.get(`http://localhost:7230/products/singleproduct/${id}`);
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [], error: null },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error;
    });
    builder.addCase(fetchASingleProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
