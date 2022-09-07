import newBooksSlice, { fetchNewBooks } from "./newBooksSlice";
import userSlice, { signUp, signIn, signOut, clearErrors } from "./userSlice";
import bookSlice, { fetchBook } from "./bookSlice";
import searchBooksSlice, {
  fetchBooksBySearch,
  incrementPage,
  decrementPage,
  clearSearch,
  setPage,
} from "./searchBooksSlice";
export {
  newBooksSlice,
  userSlice,
  fetchNewBooks,
  signUp,
  signIn,
  signOut,
  clearErrors,
  bookSlice,
  fetchBook,
  fetchBooksBySearch,
  incrementPage,
  decrementPage,
  searchBooksSlice,
  clearSearch,
  setPage,
};
