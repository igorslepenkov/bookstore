import { MouseEventHandler } from "react";
import { BlackHeart, RedHeart } from "../../assets";
import { StyledFavoritesButton } from "./style";

interface IProps {
  isInFavorites: boolean;
  handleFavoritesClick: MouseEventHandler<HTMLButtonElement>;
}

export const FavoritesButton = ({
  isInFavorites,
  handleFavoritesClick,
}: IProps) => {
  return (
    <StyledFavoritesButton onClick={handleFavoritesClick} type="button">
      {isInFavorites ? <RedHeart /> : <BlackHeart />}
    </StyledFavoritesButton>
  );
};
