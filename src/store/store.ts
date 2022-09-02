import { configureStore } from "@reduxjs/toolkit";
import { bookSlice, newBooksSlice, userSlice } from "./features";

export const store = configureStore({
  reducer: {
    newBooks: newBooksSlice,
    user: userSlice,
    book: bookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
