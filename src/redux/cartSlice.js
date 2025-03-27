import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cartItems: [], // Optional - to store item list
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartCount = state.cartItems.length;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartCount = state.cartItems.length;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
