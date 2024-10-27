import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get("http://localhost:7230/products/getproducts");
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const fetchASingleProduct = createAsyncThunk(
  "products/fetchASingleProduct",
  async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:7230/products/singleproduct/${id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (newProduct) => {
    try {
      const res = await axios.post(
        "http://localhost:7230/products/createproduct",
        newProduct,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    try {
      const res = await axios.put(
        `http://localhost:7230/products/edit-product/${id}`,
        product,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }) => {
    try {
      await axios.delete(`http://localhost:7230/products/deleteproduct/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: "products",

  initialState: {
    isLoading: false,
    products: [],
    editData: null,
    error: null,
    singleProduct: null,
  },

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
    // ? getting a single product
    builder.addCase(fetchASingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchASingleProduct.fulfilled, (state, action) => {
      state.isLoading = false; // loading is complete
      state.singleProduct = action.payload; // set singleProduct to the payload
    });

    builder.addCase(fetchASingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.singleProduct = null;
      state.error = action.error.message;
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

    //? updating product
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
  },
});

export const { setEditData } = productSlice.actions;
export default productSlice.reducer;
