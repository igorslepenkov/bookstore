import { useEffect, useState } from "react";
import { getCart } from "../store";
import { useAppSelector } from "../store/hooks";

export const useTotal = () => {
  const cart = useAppSelector(getCart);
  const [sum, setSum] = useState<number>(0);
  const [vat, setVat] = useState<number>(() => {
    return sum * 0.2;
  });
  const [total, setTotal] = useState<number>(() => {
    return sum + vat;
  });

  useEffect(() => {
    if (cart) {
      const newSum = cart.reduce((sum, cartObj) => {
        return (sum += Number(cartObj.book.price.replace(/\D/, "")) * cartObj.amount);
      }, 0);
      setSum(newSum);
    } else {
      setSum(0);
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      setVat(Math.round(sum * 0.2 * 100) / 100);
    } else {
      setVat(0);
    }
  }, [sum, cart]);

  useEffect(() => {
    if (cart) {
      setTotal(sum + vat);
    } else {
      setTotal(0);
    }
  }, [sum, cart, vat]);

  return { sum, vat, total };
};
