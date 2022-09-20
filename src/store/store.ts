import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  bookSlice,
  cartSlice,
  favoritesSlice,
  newBooksSlice,
  searchBooksSlice,
  userSlice,
} from "./features";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "favorites", "cart"],
};

const rootReducer = combineReducers({
  newBooks: newBooksSlice,
  user: userSlice,
  book: bookSlice,
  searchBooks: searchBooksSlice,
  favorites: favoritesSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
