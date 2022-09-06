import { ArrowSmallLeft, ArrowSmallRight } from "../../assets";
import { usePagination } from "../../hooks/usePagination";
import {
  PaginationArrow,
  PaginationNumber,
  PaginationNumbers,
  StyledBookListPagination,
} from "./style";

export const BookListPagination = () => {
  const { paginationArray, currentPage } = usePagination();
  console.log(paginationArray);
  if (paginationArray) {
    return (
      <StyledBookListPagination>
        <PaginationArrow>
          <ArrowSmallRight />
          Next
        </PaginationArrow>

        <PaginationNumbers>
          {paginationArray.map((character) => {
            return (
              <PaginationNumber isActive={currentPage === character}>
                {character}
              </PaginationNumber>
            );
          })}
        </PaginationNumbers>

        <PaginationArrow>
          Prev
          <ArrowSmallLeft />
        </PaginationArrow>
      </StyledBookListPagination>
    );
  }
  return null;
};
