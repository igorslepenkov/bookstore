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
} from "./style";
import ClipLoader from "react-spinners/ClipLoader";
import { ErrorPage } from "../ErrorPage";
import { Title } from "../Title";

interface IProps {
  book: IBook;
}

export const BookListItem = ({ book }: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const [bookDetails, setBookDetails] = useState<IBookApiDetails>();

  useEffect(() => {
    bookstoreApi
      .getOneByISBN(book.isbn13)
      .then((result) => {
        setBookDetails(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ClipLoader loading={loading} />;
  } else if (bookDetails) {
    return (
      <StyledBookListItem>
        <BookImageWrapper>
          <BookImage src={bookDetails.image} />
        </BookImageWrapper>

        <Title titleGrade={3} text={bookDetails.title} />

        <BookAuthorsAndPublisher>
          {`by ${bookDetails.authors}, ${bookDetails.publisher} ${bookDetails.year}`}
        </BookAuthorsAndPublisher>

        <BookCostAndRating>
          <BookCost>{bookDetails.price}</BookCost>
        </BookCostAndRating>
      </StyledBookListItem>
    );
  } else {
    console.log(error);
    return <ErrorPage />;
  }
};
