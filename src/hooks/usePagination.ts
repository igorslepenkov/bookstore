import { useEffect, useState } from "react";
import { getSearchBooksPage, getSearchBooksTotal } from "../store";
import { useAppSelector } from "../store/hooks";

export const usePagination = () => {
  const [paginationArray, setPaginationArray] = useState<(string | number)[] | null>(null);
  const currentPage = useAppSelector(getSearchBooksPage);
  const totalBooks = useAppSelector(getSearchBooksTotal);
  const booksPerPage = 10;

  useEffect(() => {
    if (totalBooks && currentPage) {
      const totalPages = totalBooks / booksPerPage;
      const totalPagesArray = [];
      for (let i = 1; i < totalPages; i++) {
        totalPagesArray.push(i);
      }
      if (totalPagesArray.length <= 7) {
        setPaginationArray(totalPagesArray);
      } else if (totalPagesArray.length - currentPage < 5) {
        const numbersToRight = totalPagesArray.length - currentPage;
        const numbersToLeft = 8 - numbersToRight - 1;
        setPaginationArray([1, "..."].concat(totalPagesArray.slice(currentPage - numbersToLeft)));
      } else if (currentPage <= 2) {
        let paginationArray: (string | number)[] = [];
        paginationArray = paginationArray.concat(
          totalPagesArray.slice(0, currentPage + (4 - currentPage))
        );
        paginationArray = paginationArray.concat([
          "...",
          totalPagesArray[totalPagesArray.length - 1],
        ]);
        setPaginationArray(paginationArray);
      } else {
        const paginationArray = [1, "..."]
          .concat(totalPagesArray.slice(currentPage - 2, currentPage + 2))
          .concat(["...", totalPagesArray[totalPagesArray.length - 1]]);
        setPaginationArray(paginationArray);
      }
    }
  }, [currentPage, totalBooks]);
  return { paginationArray, currentPage };
};
