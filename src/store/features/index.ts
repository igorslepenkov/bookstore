import newBooksSlice, { fetchNewBooks } from "./newBooksSlice";

import userSlice, {
  signUp,
  signIn,
  signOut,
  clearErrors,
  updateUser,
} from "./userSlice";

import bookSlice, { fetchBook } from "./bookSlice";

import searchBooksSlice, {
  fetchBooksBySearch,
  incrementPage,
  decrementPage,
  clearSearch,
  setPage,
} from "./searchBooksSlice";

import favoritesSlice, {
  addToFavorites,
  removeFromFavorites,
} from "./favoritesSlice";

import cartSlice, {
  addToCart,
  removeFromCart,
  incrementBookAmount,
  decrementBookAmount,
} from "./cartSlice";

export {
  newBooksSlice,
  userSlice,
  fetchNewBooks,
  signUp,
  signIn,
  signOut,
  updateUser,
  clearErrors,
  bookSlice,
  fetchBook,
  fetchBooksBySearch,
  incrementPage,
  decrementPage,
  searchBooksSlice,
  clearSearch,
  setPage,
  addToFavorites,
  removeFromFavorites,
  favoritesSlice,
  cartSlice,
  addToCart,
  removeFromCart,
  incrementBookAmount,
  decrementBookAmount,
};
