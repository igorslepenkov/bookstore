import { Selector } from "react-redux";
import { IBookApiDetails } from "../../types";
import { RootState } from "../store";

export const getCart: Selector<
  RootState,
  { book: IBookApiDetails; amount: number }[]
> = (state) => state.cart.cart;
