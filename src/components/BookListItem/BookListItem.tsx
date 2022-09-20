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
      <StyledBookListItem
        initial={{ x: 0, y: 0 }}
        whileHover={{
          translateY: -10,
          translateX: -10,
          transition: { delay: 0.2, type: "spring", duration: 1, stiffness: 150 },
        }}
        transition={{ delay: 0.5, type: "spring", duration: 1 }}
      >
        <BookImageWrapper>
          <BookImage src={book.image} />
        </BookImageWrapper>
        <StyledTitle>{book.title}</StyledTitle>
      </StyledBookListItem>
    </StyledLink>
  );
};
