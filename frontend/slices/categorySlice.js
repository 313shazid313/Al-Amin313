import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    const res = await axios.get("http://localhost:7230/allcategory");
    return res.data;
  }
);

export const postNewCategory = createAsyncThunk(
  "categories/postNewCategory",
  async (category) => {
    const res = await axios
      .post("http://localhost:7230/createcategory", category, {
        headers: {
          "Content-Type": "application/json", // Make sure to send the request as JSON
        },
      })
      .catch((error) => {
        console.error(error);
      });
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async ({ id }) => {
    const res = await axios
      .delete(`http://localhost:7230/delcategory/${id}`)
      .catch((error) => {
        console.error(error);
      });
    return res.data;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState: { isLoading: false, categories: [], error: null },

  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.categories = [];
      state.error = action.error;
    });
    builder.addCase(postNewCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
  },
});

export default categorySlice.reducer;
