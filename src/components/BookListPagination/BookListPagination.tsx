import { KeyboardEventHandler, MouseEventHandler } from "react";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "../../assets";
import { usePagination } from "../../hooks/usePagination";
import { decrementPage, incrementPage, setPage } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import {
  PaginationArrow,
  PaginationNumber,
  PaginationNumbers,
  StyledBookListPagination,
} from "./style";

export const BookListPagination = () => {
  const { paginationArray, currentPage } = usePagination();
  const dispatch = useAppDispatch();

  const onLeftArrowButtonClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(decrementPage());
  };

  const onLeftArrowButtonKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      dispatch(decrementPage());
    }
  };

  const onRightArrowButtonClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(incrementPage());
  };

  const onRightArrowButtonKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      dispatch(incrementPage());
    }
  };

  const onPaginationNumberClick: MouseEventHandler<HTMLLIElement> = (event) => {
    if (event.currentTarget.dataset.page) {
      const { page } = event.currentTarget.dataset;
      if (page !== "...") {
        dispatch(setPage(page));
      }
    }
  };

  if (paginationArray) {
    return (
      <StyledBookListPagination>
        <PaginationArrow
          onClick={onLeftArrowButtonClick}
          onKeyDown={onLeftArrowButtonKeyDown}
          tabIndex={0}
        >
          <ArrowSmallRightIcon />
          <span>Next</span>
        </PaginationArrow>

        <PaginationNumbers>
          {paginationArray.map((character, idx) => {
            return (
              <PaginationNumber
                isActive={currentPage === character}
                key={idx}
                data-page={character}
                onClick={onPaginationNumberClick}
              >
                {character}
              </PaginationNumber>
            );
          })}
        </PaginationNumbers>

        <PaginationArrow
          onClick={onRightArrowButtonClick}
          onKeyDown={onRightArrowButtonKeyDown}
          tabIndex={0}
        >
          <span>Prev</span>
          <ArrowSmallLeftIcon />
        </PaginationArrow>
      </StyledBookListPagination>
    );
  }
  return null;
};
