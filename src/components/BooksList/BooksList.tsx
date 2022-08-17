import { IBook } from "../../types";
import { BookListItem } from "../BookListItem";
import { StyledBooksList } from "./style";

interface IProps {
  books: IBook[];
}

export const BooksList = ({ books }: IProps) => {
  return (
    <StyledBooksList>
      {books.map((book: IBook) => {
        return <BookListItem book={book} key={book.isbn13} />;
      })}
    </StyledBooksList>
  );
};
