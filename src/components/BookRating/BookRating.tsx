import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as GreyStar } from "../../assets/grey-star.svg";
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
        starsArray.push(<Star key={i} />);
        stars -= 1;
      } else {
        starsArray.push(<GreyStar key={i} />);
      }
    }
    return starsArray;
  };

  return <StyledBookRating>{getStarsArray()}</StyledBookRating>;
};
