import { Selector } from "react-redux";
import { IBookApiDetails } from "../../types";
import { RootState } from "../store";

export const getBookIsLoading: Selector<RootState, boolean> = (state) =>
  state.book.isLoading;
export const getBook: Selector<RootState, IBookApiDetails> = (state) =>
  state.book.book;
export const getBookError: Selector<RootState, string | null> = (state) =>
  state.book.error;
