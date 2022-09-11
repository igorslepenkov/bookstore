import { createSlice } from "@reduxjs/toolkit";
import { IBookApiDetails } from "../../types";

type InitialState = {
  favorites: IBookApiDetails[];
};

const initialState: InitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((book) => {
        return book.isbn13 !== payload;
      });
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
