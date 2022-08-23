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
import { BookDetailType, IBookApiDetails } from "../../types";
import { ErrorPage } from "../ErrorPage";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import {
  AddToCartButton,
  BookDetails,
  BookDetailsImageWrapper,
  BookDetailsWrapper,
  BookImage,
  PreviewLink,
  StyledArrowLeft,
} from "./style";
import { BookCostAndRating } from "../../components/BookCostAndRating";
import { authorsCutter } from "../../utils";
import { BookDetailsList } from "../../components/BookDetailsList";
import { BookDetailsTabs } from "../../components/BookDetailsTabs";
import { SubscribeToNewsletter } from "../../components/SubscribeToNewsletter";

export const BookPage = () => {
  const [book, setBook] = useState<IBookApiDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();

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
    const bookDetailsArray: BookDetailType[] = [
      ["Authors", authorsCutter(book.authors)],
      ["Publisher", book.publisher],
      ["Published", book.year],
      ["Pages", book.pages],
      ["Language", book.language],
      ["ISBN", book.isbn13],
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
            <BookCostAndRating
              appendPlace="page"
              price={book.price}
              rating={book.rating}
            />

            <BookDetailsList bookDetailsArray={bookDetailsArray} />

            <AddToCartButton>Add to cart</AddToCartButton>

            {book.pdf && book.pdf["Free eBook"] && (
              <PreviewLink href={book.pdf["Free eBook"]}>
                Free eBook
              </PreviewLink>
            )}

            {book.pdf && !book.pdf["Free eBook"] && (
              <PreviewLink href={Object.values(book.pdf)[0]}>
                Preview book
              </PreviewLink>
            )}
          </BookDetails>
        </BookDetailsWrapper>
        <BookDetailsTabs desc={book.desc} authors={book.authors} />
        <SubscribeToNewsletter />
      </Page>
    );
  } else {
    console.log(error);
    return <ErrorPage />;
  }
};
