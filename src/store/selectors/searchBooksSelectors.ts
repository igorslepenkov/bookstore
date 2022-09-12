import { Selector } from "@reduxjs/toolkit";
import { IBook } from "../../types";
import { RootState } from "../store";

export const getSearchBooks: Selector<RootState, IBook[] | null> = (state) =>
  state.searchBooks.searchBooks;
export const getSearchBooksIsLoading: Selector<RootState, boolean> = (state) =>
  state.searchBooks.isLoading;
export const getSearchBooksError: Selector<RootState, string | null> = (
  state
) => state.searchBooks.error;
export const getSearchBooksPage: Selector<RootState, number | null> = (state) =>
  state.searchBooks.page;
export const getSearchBooksTotal: Selector<RootState, number | null> = (
  state
) => state.searchBooks.total;
