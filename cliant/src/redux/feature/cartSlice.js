import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken, setToken } from "../../helper/helperFunction";

// Fetching cart products
export const fetchCartProducts = createAsyncThunk(
  "carts/fetchCartProducts",
  async () => {
    const token = getToken(); // Fetch the token from your helper function
    const res = await axios.get(
      "http://localhost:7230/cart/getallcartproduct",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data; // Assuming the response contains the cart products
  }
);

// Adding products to cart
export const addToCart = createAsyncThunk(
  "carts/addToCart",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:7230/cart/addtocart",
      payload
    );

    setToken(res.data.token);
    return res.data;
  }
);

// export const addToCart = createAsyncThunk("carts/addToCart", async (cart) => {
//   try {
//     const res = await axios.post("http://localhost:7230/cart/addtocart", cart);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const cartSlice = createSlice({
  name: "carts",
  initialState: { isLoading: false, carts: [], error: null },

  extraReducers: (builder) => {
    builder
      // Handle fetching cart products
      .addCase(fetchCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
        state.error = null;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.error = action.error.message;
      })

      // Handle adding products to the cart
      .addCase(addToCart.fulfilled, (state, action) => {
        state.carts = action.payload;
      });
  },
});

export default cartSlice.reducer;
