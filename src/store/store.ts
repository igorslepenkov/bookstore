import { configureStore } from "@reduxjs/toolkit";
import {
  bookSlice,
  newBooksSlice,
  searchBooksSlice,
  userSlice,
} from "./features";

export const store = configureStore({
  reducer: {
    newBooks: newBooksSlice,
    user: userSlice,
    book: bookSlice,
    searchBooks: searchBooksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
