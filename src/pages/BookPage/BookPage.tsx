import { AxiosError } from "axios";
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { bookstoreApi } from "../../services";
import { IBookApiDetails } from "../../types";
import { BookRating } from "../../components/BookRating";
import { ErrorPage } from "../ErrorPage";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import {
  AddToCartButton,
  BookCost,
  BookCostAndRating,
  BookDetail,
  BookDetails,
  BookDetailsImageWrapper,
  BookDetailsList,
  BookDetailsWrapper,
  BookDetailTitle,
  BookDetailValue,
  BookImage,
  StyledArrowLeft,
} from "./style";

export const BookPage = () => {
  const [book, setBook] = useState<IBookApiDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const { isbn } = useParams();

  const navigate = useNavigate();
  const handleBackArrowClick: MouseEventHandler<SVGSVGElement> = () => {
    navigate(-1);
  };
  const handleBackArrowKeyDown: KeyboardEventHandler<SVGSVGElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (isbn) {
      bookstoreApi
        .getByISBN(isbn)
        .then((book) => {
          setBook(book);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }
  }, [isbn]);

  if (loading) {
    return <ClipLoader loading={loading} />;
  } else if (book) {
    const bookDetailsArray = [
      ["Authors", book.authors],
      ["Publisher", book.publisher],
      ["Published", book.year],
      ["Pages", book.pages],
      ["Language", book.language],
    ];

    return (
      <Page>
        <StyledArrowLeft
          onClick={handleBackArrowClick}
          onKeyDown={handleBackArrowKeyDown}
          tabIndex={1}
        />
        <Title titleGrade={1} text={book.title} />
        <BookDetailsWrapper>
          <BookDetailsImageWrapper>
            <BookImage src={book.image} />
          </BookDetailsImageWrapper>
          <BookDetails>
            <BookCostAndRating>
              <BookCost>{book.price}</BookCost>
              <BookRating rating={Number(book.rating)} />
            </BookCostAndRating>
            <BookDetailsList>
              {bookDetailsArray.map((bookDetail) => {
                return (
                  <BookDetail>
                    <BookDetailTitle>{bookDetail[0]}</BookDetailTitle>
                    <BookDetailValue>{bookDetail[1]}</BookDetailValue>
                  </BookDetail>
                );
              })}
            </BookDetailsList>
            <AddToCartButton>Add to cart</AddToCartButton>
          </BookDetails>
        </BookDetailsWrapper>
      </Page>
    );
  } else {
    console.log(error);
    return <ErrorPage />;
  }
};
