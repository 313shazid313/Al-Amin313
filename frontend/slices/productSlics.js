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
    const res = await axios.get(
      `http://localhost:7230/products/singleproduct/${id}`
    );
    return res.data;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (newProduct) => {
    const res = await axios
      .post("http://localhost:7230/products/createproduct", newProduct, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [], editData: null, error: null },

  reducers: {
    setEditData: (state, action) => {
      state.editData = action.payload;
    },
  },

  extraReducers: (builder) => {
    //?fetching products
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

    //? add new product
    builder.addCase(addNewProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(addNewProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setEditData } = productSlice.actions;
export default productSlice.reducer;
