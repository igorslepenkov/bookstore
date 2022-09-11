import { useEffect, useState } from "react";
import { bookstoreApi } from "../services";
import { IBook } from "../types";
import { getSearchPatterns } from "../utils";

export const useSimilarBooks = (bookTitle: string, isbn13: string) => {
  const [similarBooks, setSimilarBooks] = useState<IBook[]>([]);
  const searchPatterns = getSearchPatterns(bookTitle);

  useEffect(() => {
    Promise.allSettled(
      searchPatterns.map((pattern) => {
        bookstoreApi.getBySearch(pattern, 1).then((response) => {
          if (response.books) {
            const books = response.books.filter(
              (book) => book.isbn13 !== isbn13
            );
            const filteredBooks = books.filter((book) => {
              const regex = new RegExp(`[^\\w]${pattern}[^\\w]`, "ig");
              return regex.test(book.title) || regex.test(book.subtitle);
            });

            const [first, second, third] = filteredBooks;

            setSimilarBooks((similarBooks) => {
              first && similarBooks.push(first);
              second && similarBooks.push(second);
              third && similarBooks.push(third);
              const set = new Set(similarBooks.map((book) => book.isbn13));
              const filtered = similarBooks.filter((book) => {
                if (set.has(book.isbn13)) {
                  set.delete(book.isbn13);
                  return true;
                } else {
                  return false;
                }
              });
              return filtered;
            });
          }
        });
        return pattern;
      })
    );
    return () => {
      setSimilarBooks([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookTitle, isbn13]);

  return similarBooks;
};
