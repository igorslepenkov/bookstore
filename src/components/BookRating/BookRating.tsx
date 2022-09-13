import { StarIcon } from "../../assets";
import { GreyStarIcon } from "../../assets";
import { StyledBookRating } from "./style";

interface IProps {
  rating: number;
}

export const BookRating = ({ rating }: IProps) => {
  const getStarsArray = (): JSX.Element[] => {
    let stars = rating;
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (stars > 0) {
        starsArray.push(<StarIcon key={i} />);
        stars -= 1;
      } else {
        starsArray.push(<GreyStarIcon key={i} />);
      }
    }
    return starsArray;
  };

  return <StyledBookRating>{getStarsArray()}</StyledBookRating>;
};
