import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    const res = await axios.get("http://localhost:7230/allcategory");
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
  },
});

export default categorySlice.reducer;
