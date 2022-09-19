import { IBook } from "../../types";
import { BookImage, BookImageWrapper, StyledBookListItem, StyledLink, StyledTitle } from "./style";
import { createDinamicPath } from "../../utils";
import { RoutesUrl } from "../../router";
import { resolvePath } from "react-router-dom";

interface IProps {
  book: IBook;
}

export const SimilarBooksListItem = ({ book }: IProps) => {
  return (
    <StyledBookListItem>
      <StyledLink to={resolvePath(createDinamicPath(RoutesUrl.BOOK, book.isbn13))}>
        <BookImageWrapper>
          <BookImage src={book.image} />
        </BookImageWrapper>
        <StyledTitle>{book.title}</StyledTitle>
      </StyledLink>
    </StyledBookListItem>
  );
};
