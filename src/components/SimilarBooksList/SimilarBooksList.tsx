import { useSimilarBooks } from "../../hooks";
import { IBook } from "../../types";
import { SimilarBooksListItem } from "../SimilarBooksListItem";
import { StyledSimilarBooksList } from "./style";

interface IProps {
  similarBooks: IBook[];
}

export const SimilarBooksList = ({ similarBooks }: IProps) => {
  return (
    <StyledSimilarBooksList>
      {similarBooks.map((book: IBook) => {
        return <SimilarBooksListItem book={book} key={book.isbn13} />;
      })}
    </StyledSimilarBooksList>
  );
};
