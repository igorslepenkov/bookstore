import { MouseEventHandler } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { CrossBlackIcon, CrossWhiteIcon } from "../../assets";
import { useWindowSize } from "../../hooks";
import { useCart } from "../../hooks/useCart";
import { RoutesUrl } from "../../router";
import {
  addToCart,
  decrementBookAmount,
  getCart,
  incrementBookAmount,
  removeFromCart,
} from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IBookApiDetails } from "../../types";
import { MediaBreakpoints } from "../../ui";
import { authorsCutter, createDinamicPath } from "../../utils";
import {
  BookAmount,
  BookAmountButton,
  BookAmountText,
  BookAuthorsAndPublisher,
  BookCost,
  BookCostAndAmount,
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
  const cart = useAppSelector(getCart);

  const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (isInCart) {
      dispatch(removeFromCart(book.isbn13));
    } else {
      dispatch(addToCart(book));
    }
  };
  const handleIncreaseAmountClick = (bookIsbn: string) => {
    dispatch(incrementBookAmount(bookIsbn));
  };

  const handleDecreaseAmountClick = (bookIsbn: string) => {
    dispatch(decrementBookAmount(bookIsbn));
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
            <CrossBlackIcon />
          ) : (
            <CrossWhiteIcon />
          )}
        </CartButton>
        <BookImage src={book.image} />
      </BookImageWrapper>

      <CardTextContent>
        <StyledTitle>{book.title}</StyledTitle>

        <BookAuthorsAndPublisher>
          {`by ${authorsCutter(book.authors)}, ${book.publisher} ${book.year}`}
        </BookAuthorsAndPublisher>

        <BookCostAndAmount>
          <BookAmount>
            <BookAmountButton
              onClick={() => handleDecreaseAmountClick(book.isbn13)}
            >
              -
            </BookAmountButton>
            <BookAmountText>
              {
                cart.find((cartObj) => cartObj.book.isbn13 === book.isbn13)
                  ?.amount
              }
            </BookAmountText>
            <BookAmountButton
              onClick={() => handleIncreaseAmountClick(book.isbn13)}
            >
              +
            </BookAmountButton>
          </BookAmount>
          <BookCost>{book.price}</BookCost>
        </BookCostAndAmount>
      </CardTextContent>
    </StyledBookListItem>
  );
};
