import { useEffect, useState } from "react";
import { getFavorites } from "../store";
import { useAppSelector } from "../store/hooks";

export const useFavorites = (bookIsbn: string) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const favorites = useAppSelector(getFavorites);

  useEffect(() => {
    if (favorites && favorites.find((book) => book.isbn13 === bookIsbn)) {
      setIsInFavorites(true);
    } else {
      setIsInFavorites(false);
    }
  }, [bookIsbn, favorites]);

  return isInFavorites;
};
