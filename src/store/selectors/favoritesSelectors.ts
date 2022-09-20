import { Selector } from "@reduxjs/toolkit";
import { IBookApiDetails } from "../../types";
import { RootState } from "../store";

export const getFavorites: Selector<RootState, IBookApiDetails[]> = (state) =>
  state.favorites.favorites;
