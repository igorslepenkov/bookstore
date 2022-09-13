import { MouseEventHandler } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { RedHeartIcon } from "../../assets";
import { useFavorites } from "../../hooks";
import { RoutesUrl } from "../../router";
import { addToFavorites, removeFromFavorites } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { IBookApiDetails } from "../../types";
import { authorsCutter, createDinamicPath } from "../../utils";
import { BookCostAndRating } from "../BookCostAndRating";
import {
  BookAuthorsAndPublisher,
  BookImage,
  BookImageWrapper,
  CardTextContent,
  FavoritesButton,
  StyledBookListItem,
  StyledTitle,
} from "./style";

interface IProps {
  book: IBookApiDetails;
}

export const FavoritesCard = ({ book }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInFavorites = useFavorites(book.isbn13);
  const handleFavoritesClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(book.isbn13));
    } else {
      dispatch(addToFavorites(book));
    }
  };
  const handleFavoritesCardClick: MouseEventHandler = (event) => {
    if (
      !(event.target instanceof HTMLButtonElement) &&
      !(event.target instanceof SVGSVGElement) &&
      !(event.target instanceof SVGPathElement)
    ) {
      navigate(resolvePath(createDinamicPath(RoutesUrl.BOOK, book.isbn13)));
    }
  };

  return (
    <StyledBookListItem onClick={handleFavoritesCardClick}>
      <BookImageWrapper>
        <FavoritesButton type="button" onClick={handleFavoritesClick}>
          <RedHeartIcon />
        </FavoritesButton>
        <BookImage src={book.image} />
      </BookImageWrapper>

      <CardTextContent>
        <StyledTitle>{book.title}</StyledTitle>

        <BookAuthorsAndPublisher>
          {`by ${authorsCutter(book.authors)}, ${book.publisher} ${book.year}`}
        </BookAuthorsAndPublisher>

        <BookCostAndRating
          appendPlace="list"
          price={book.price}
          rating={book.rating}
        />
      </CardTextContent>
    </StyledBookListItem>
  );
};
