import { Selector } from "@reduxjs/toolkit";
import { IBook } from "../../types";
import { RootState } from "../store";

export const getNewBooks: Selector<RootState, IBook[] | null> = (state) =>
  state.newBooks.newBooks;
export const getIsLoading: Selector<RootState, boolean> = (state) =>
  state.newBooks.isLoading;
export const getError: Selector<RootState, string | null> = (state) =>
  state.newBooks.error;
