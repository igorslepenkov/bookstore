import { KeyboardEventHandler, MouseEventHandler } from "react";
import { ArrowSmallLeft, ArrowSmallRight } from "../../assets";
import { usePagination } from "../../hooks/usePagination";
import { decrementPage, incrementPage } from "../../store";
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
  if (paginationArray) {
    return (
      <StyledBookListPagination>
        <PaginationArrow
          onClick={onLeftArrowButtonClick}
          onKeyDown={onLeftArrowButtonKeyDown}
          tabIndex={0}
        >
          <ArrowSmallRight />
          Next
        </PaginationArrow>

        <PaginationNumbers>
          {paginationArray.map((character, idx) => {
            return (
              <PaginationNumber isActive={currentPage === character} key={idx}>
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
          Prev
          <ArrowSmallLeft />
        </PaginationArrow>
      </StyledBookListPagination>
    );
  }
  return null;
};
