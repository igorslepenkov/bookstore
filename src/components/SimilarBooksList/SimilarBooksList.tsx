import { KeyboardEventHandler, MouseEventHandler, useRef } from "react";
import { useScroll, useWindowSize } from "../../hooks";
import { IBook } from "../../types";
import { SimilarBooksListItem } from "../SimilarBooksListItem";
import { Title } from "../Title";
import {
  ScrollButtonsGroup,
  ArrowSmallLeftButton,
  ArrowSmallRightButton,
  StyledSimilarBooksList,
  StyledSimilarBooksListWrapper,
} from "./style";

interface IProps {
  similarBooks: IBook[];
}

export const SimilarBooksList = ({ similarBooks }: IProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const windowSize = useWindowSize();
  const { scrollLeft, scrollRight } = useScroll(ref, windowSize.width);

  const onLeftArrowButtonClick: MouseEventHandler<SVGSVGElement> = () => {
    scrollLeft();
  };

  const onLeftArrowButtonKeyDown: KeyboardEventHandler<SVGSVGElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      scrollLeft();
    }
  };

  const onRightArrowButtonClick: MouseEventHandler<SVGSVGElement> = () => {
    scrollRight();
  };

  const onRightArrowButtonKeyDown: KeyboardEventHandler<SVGSVGElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      scrollRight();
    }
  };

  return (
    <StyledSimilarBooksListWrapper>
      <Title text="Similar books" titleGrade={2} />

      <ScrollButtonsGroup>
        <ArrowSmallRightButton
          tabIndex={0}
          onClick={onRightArrowButtonClick}
          onKeyDown={onRightArrowButtonKeyDown}
        />
        <ArrowSmallLeftButton
          tabIndex={0}
          onClick={onLeftArrowButtonClick}
          onKeyDown={onLeftArrowButtonKeyDown}
        />
      </ScrollButtonsGroup>

      <StyledSimilarBooksList ref={ref}>
        {similarBooks.map((book: IBook) => {
          return <SimilarBooksListItem book={book} key={book.isbn13} />;
        })}
      </StyledSimilarBooksList>
    </StyledSimilarBooksListWrapper>
  );
};
