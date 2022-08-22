import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { bookstoreApi } from "../../services";
import { IBook, IBookApiDetails } from "../../types";
import {
  BookAuthorsAndPublisher,
  BookCost,
  BookCostAndRating,
  BookImage,
  BookImageWrapper,
  StyledBookListItem,
  StyledLink,
  StyledTitle,
} from "./style";
import ClipLoader from "react-spinners/ClipLoader";
import { ErrorPage } from "../../pages/ErrorPage";
import { BookRating } from "../BookRating";
import { authorsCutter, createDinamicPath } from "../../utils";
import { RoutesUrl } from "../../router";

interface IProps {
  book: IBook;
}

export const BookListItem = ({ book }: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const [bookDetails, setBookDetails] = useState<IBookApiDetails>();

  useEffect(() => {
    bookstoreApi
      .getByISBN(book.isbn13)
      .then((result) => {
        setBookDetails(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [book.isbn13]);

  if (loading) {
    return <ClipLoader loading={loading} />;
  } else if (bookDetails) {
    return (
      <StyledLink to={createDinamicPath(RoutesUrl.BOOK, book.isbn13)}>
        <StyledBookListItem>
          <BookImageWrapper>
            <BookImage src={bookDetails.image} />
          </BookImageWrapper>

          <StyledTitle>{bookDetails.title}</StyledTitle>

          <BookAuthorsAndPublisher>
            {`by ${authorsCutter(bookDetails.authors)}, ${
              bookDetails.publisher
            } ${bookDetails.year}`}
          </BookAuthorsAndPublisher>

          <BookCostAndRating>
            <BookCost>{bookDetails.price}</BookCost>
            <BookRating rating={Number(bookDetails.rating)} />
          </BookCostAndRating>
        </StyledBookListItem>
      </StyledLink>
    );
  } else {
    console.log(error);
    return <ErrorPage />;
  }
};
