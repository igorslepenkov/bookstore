import { useEffect, useState } from "react";
import { useGetFavorites } from "../store";

export const useFavorites = (bookIsbn: string) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const favorites = useGetFavorites();

  useEffect(() => {
    if (favorites && favorites.find((book) => book.isbn13 === bookIsbn)) {
      setIsInFavorites(true);
    } else {
      setIsInFavorites(false);
    }
  }, [bookIsbn, favorites]);

  return isInFavorites;
};
