import { useSimilarBooks } from "../../hooks";
import { IBook } from "../../types";
import { SimilarBooksListItem } from "../SimilarBooksListItem";
import { StyledSimilarBooksList } from "./style";

interface IProps {
  bookTitle: string;
  isbn13: string;
}

export const SimilarBooksList = ({ bookTitle, isbn13 }: IProps) => {
  const similarBooks = useSimilarBooks(bookTitle, isbn13);
  return (
    <StyledSimilarBooksList>
      {similarBooks.map((book: IBook) => {
        return <SimilarBooksListItem book={book} key={book.isbn13} />;
      })}
    </StyledSimilarBooksList>
  );
};
