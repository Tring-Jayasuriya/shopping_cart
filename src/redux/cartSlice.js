import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cartData.find((item) => item.id === action.payload.id)) {
        return { ...state, cartData: [...state.cartData, action.payload] }; // ✅ Returns new state object
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
