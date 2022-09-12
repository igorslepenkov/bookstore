import { createSlice } from "@reduxjs/toolkit";
import { IBookApiDetails } from "../../types";

type InitialState = {
  cart: IBookApiDetails[];
};

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((book) => {
        return book.isbn13 !== payload;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
