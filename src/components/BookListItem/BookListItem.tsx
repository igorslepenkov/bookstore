import { IBook } from "../../types";
import { createDinamicPath } from "../../utils";
import { BookImage, BookImageWrapper, StyledBookListItem, StyledLink, StyledTitle } from "./style";
import { RoutesUrl } from "../../router";
import { resolvePath } from "react-router-dom";

interface IProps {
  book: IBook;
}

export const BookListItem = ({ book }: IProps) => {
  return (
    <StyledLink to={resolvePath(createDinamicPath(RoutesUrl.BOOK, book.isbn13))}>
      <StyledBookListItem>
        <BookImageWrapper>
          <BookImage src={book.image} />
        </BookImageWrapper>
        <StyledTitle>{book.title}</StyledTitle>
      </StyledBookListItem>
    </StyledLink>
  );
};
