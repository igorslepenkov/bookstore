import { useEffect, useState } from "react";
import { bookstoreApi } from "../services";
import { IBook } from "../types";
import { getSearchPatterns } from "../utils";

export const useSimilarBooks = (bookTitle: string, isbn13: string) => {
  const [similarBooks, setSimilarBooks] = useState<IBook[]>([]);
  const searchPatterns = getSearchPatterns(bookTitle);

  useEffect(() => {
    searchPatterns.map((pattern) => {
      bookstoreApi.getBySearch(pattern, 1).then((response) => {
        const books = response.books.filter((book) => book.isbn13 !== isbn13);
        const filteredBooks = books.filter((book) => {
          const regex = new RegExp(`[^\w]${pattern}[^\w]`, "ig");
          return regex.test(book.title);
        });
        const [first, second] = filteredBooks;
        setSimilarBooks((similarBooks) => {
          first && similarBooks?.push(first);
          second && similarBooks?.push(second);
          const set = new Set(similarBooks.map((book) => book.isbn13));
          const filtered = similarBooks.filter((book) => {
            if (set.has(book.isbn13)) {
              set.delete(book.isbn13);
              return true;
            }
          });
          return filtered;
        });
      });
    });
  }, [bookTitle]);

  return similarBooks;
};
