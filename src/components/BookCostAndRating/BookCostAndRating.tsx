import { BookRating } from "../BookRating";
import { BookCost, StyledBookCostAndRating } from "./style";

interface IProps {
  appendPlace: string;
  price: string;
  rating: string;
}

export const BookCostAndRating = ({ appendPlace, price, rating }: IProps) => {
  return (
    <StyledBookCostAndRating appendPlace={appendPlace}>
      <BookCost appendPlace={appendPlace}>
        {price === "$0.00" ? "For Free!" : price}
      </BookCost>
      <BookRating rating={Number(rating)} />
    </StyledBookCostAndRating>
  );
};
