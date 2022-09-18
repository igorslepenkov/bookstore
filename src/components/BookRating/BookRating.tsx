import { StyledBookRating, StyledStarIcon, StyledGreyStarIcon } from "./style";

interface IProps {
  rating: number;
}

export const BookRating = ({ rating }: IProps) => {
  const getStarsArray = (): JSX.Element[] => {
    let stars = rating;
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (stars > 0) {
        starsArray.push(<StyledStarIcon key={i} />);
        stars -= 1;
      } else {
        starsArray.push(<StyledGreyStarIcon key={i} />);
      }
    }
    return starsArray;
  };

  return <StyledBookRating>{getStarsArray()}</StyledBookRating>;
};
