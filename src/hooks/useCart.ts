import { useEffect, useState } from "react";
import { getCart } from "../store";
import { useAppSelector } from "../store/hooks";

export const useCart = (bookIsbn: string) => {
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const cart = useAppSelector(getCart);

  useEffect(() => {
    if (cart && cart.find((cartObj) => cartObj.book.isbn13 === bookIsbn)) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [bookIsbn, cart]);

  return isInCart;
};
