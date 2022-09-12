import { Selector } from "react-redux";
import { IBookApiDetails } from "../../types";
import { RootState } from "../store";

export const getCart: Selector<RootState, IBookApiDetails[]> = (state) =>
  state.cart.cart;
