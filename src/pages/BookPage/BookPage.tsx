import { KeyboardEventHandler, MouseEventHandler, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { BookDetailType } from "../../types";
import { Page } from "../../components";
import { Title } from "../../components";
import {
  AddToCartButton,
  BookDetails,
  BookDetailsImageWrapper,
  BookDetailsWrapper,
  BookImage,
  PreviewLink,
  StyledArrowLeft,
} from "./style";
import { BookCostAndRating } from "../../components";
import { authorsCutter } from "../../utils";
import { BookDetailsList } from "../../components";
import { BookDetailsTabs } from "../../components";
import { SubscribeToNewsletter } from "../../components";
import { SimilarBooksList } from "../../components";
import { useSimilarBooks } from "../../hooks";
import { RoutesUrl } from "../../router";
import {
  fetchBook,
  useGetBook,
  useGetBookError,
  useGetBookIsLoading,
} from "../../store";
import { useAppDispatch } from "../../store/hooks";

export const BookPage = () => {
  const { isbn } = useParams();
  const dispatch = useAppDispatch();
  const book = useGetBook();
  const loading = useGetBookIsLoading();
  const error = useGetBookError();

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

  const bookDetailsArray: BookDetailType[] = book
    ? [
        ["Authors", authorsCutter(book.authors)],
        ["Publisher", book.publisher],
        ["Published", book.year],
        ["Pages", book.pages],
        ["Language", book.language],
        ["ISBN", book.isbn13],
      ]
    : [];

  const similarBooks = useSimilarBooks(book.title, book.isbn13);

  useEffect(() => {
    if (isbn) {
      dispatch(fetchBook(isbn));
    }
  }, [isbn, dispatch]);

  if (loading) {
    return <ClipLoader loading={loading} />;
  }

  if (error) {
    return <Navigate to={RoutesUrl.ERROR} />;
  }

  if (book) {
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
        <SimilarBooksList similarBooks={similarBooks} />
      </Page>
    );
  }

  return null;
};
