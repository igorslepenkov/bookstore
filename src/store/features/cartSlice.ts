import { createSlice } from "@reduxjs/toolkit";
import { IBookApiDetails } from "../../types";

type CartBook = {
  book: IBookApiDetails;
  amount: number;
};

type InitialState = {
  cart: CartBook[];
};

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, { book: payload, amount: 1 }];
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((cartObj) => {
        return cartObj.book.isbn13 !== payload;
      });
    },
    incrementBookAmount: (state, { payload }) => {
      const cartObj = state.cart.find(
        (cartObj) => cartObj.book.isbn13 === payload
      );
      if (cartObj) {
        cartObj.amount += 1;
      }
    },
    decrementBookAmount: (state, { payload }) => {
      const cartObj = state.cart.find(
        (cartObj) => cartObj.book.isbn13 === payload
      );
      if (cartObj) {
        cartObj.amount -= 1;
        if (cartObj.amount === 0) {
          state.cart = state.cart.filter((cartObj) => {
            return cartObj.book.isbn13 !== payload;
          });
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementBookAmount,
  decrementBookAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
