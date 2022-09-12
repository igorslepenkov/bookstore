import { MouseEventHandler } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { CrossBlack, CrossWhite } from "../../assets";
import { useWindowSize } from "../../hooks";
import { useCart } from "../../hooks/useCart";
import { RoutesUrl } from "../../router";
import { addToCart, removeFromCart } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { IBookApiDetails } from "../../types";
import { MediaBreakpoints } from "../../ui";
import { authorsCutter, createDinamicPath } from "../../utils";
import {
  BookAuthorsAndPublisher,
  BookImage,
  BookImageWrapper,
  CardTextContent,
  CartButton,
  StyledBookListItem,
  StyledTitle,
} from "./style";

interface IProps {
  book: IBookApiDetails;
}

export const CartCard = ({ book }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isInCart = useCart(book.isbn13);
  const windowSize = useWindowSize();

  const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (isInCart) {
      dispatch(removeFromCart(book.isbn13));
    } else {
      dispatch(addToCart(book));
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
        <CartButton type="button" onClick={handleCartClick}>
          {windowSize.width > MediaBreakpoints.SM ? (
            <CrossBlack />
          ) : (
            <CrossWhite />
          )}
        </CartButton>
        <BookImage src={book.image} />
      </BookImageWrapper>

      <CardTextContent>
        <StyledTitle>{book.title}</StyledTitle>

        <BookAuthorsAndPublisher>
          {`by ${authorsCutter(book.authors)}, ${book.publisher} ${book.year}`}
        </BookAuthorsAndPublisher>
      </CardTextContent>
    </StyledBookListItem>
  );
};
