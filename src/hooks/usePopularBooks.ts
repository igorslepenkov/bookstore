import { useEffect, useState } from "react";
import { bookstoreApi } from "../services";
import { IBook } from "../types";

export const usePopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState<IBook[] | null>(null);

  useEffect(() => {
    bookstoreApi.getNew().then((response) => {
      setPopularBooks(response.books.slice(4, 10));
    });
  }, []);

  return popularBooks;
};
