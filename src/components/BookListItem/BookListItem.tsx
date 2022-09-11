import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { bookstoreApi } from "../../services";
import { IBook, IBookApiDetails } from "../../types";
import {
  BookAuthorsAndPublisher,
  BookImage,
  BookImageWrapper,
  StyledBookListItem,
  StyledLink,
  StyledTitle,
} from "./style";
import { authorsCutter, createDinamicPath } from "../../utils";
import { RoutesUrl } from "../../router";
import { BookCostAndRating } from "../BookCostAndRating";
import { Navigate, resolvePath } from "react-router-dom";

interface IProps {
  book: IBook;
}

export const BookListItem = ({ book }: IProps) => {
  const [error, setError] = useState<AxiosError>();
  const [bookDetails, setBookDetails] = useState<IBookApiDetails>({
    language: "",
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {
      Chapter1: "",
    },
  });

  useEffect(() => {
    bookstoreApi
      .getByISBN(book.isbn13)
      .then((result) => {
        setBookDetails(result);
      })
      .catch((err) => {
        setError(err);
      });
  }, [book.isbn13]);

  if (error) {
    return <Navigate to={RoutesUrl.ERROR} />;
  }

  return (
    <StyledLink
      to={resolvePath(createDinamicPath(RoutesUrl.BOOK, book.isbn13))}
    >
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

        <BookCostAndRating
          appendPlace="list"
          price={bookDetails.price}
          rating={bookDetails.rating}
        />
      </StyledBookListItem>
    </StyledLink>
  );
};
