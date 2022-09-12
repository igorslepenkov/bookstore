import { FavoritesCard, Page } from "../../components";
import { Title } from "../../components";
import { useGetFavorites } from "../../store";
import { FavoritesList, NothingToShow } from "./style";

export const FavoritesPage = () => {
  const favorites = useGetFavorites();
  return (
    <Page>
      <Title titleGrade={1} text="Favorites" />
      {favorites.length > 0 ? (
        <FavoritesList>
          {favorites.map((favorite) => (
            <FavoritesCard book={favorite} key={favorite.isbn13} />
          ))}
        </FavoritesList>
      ) : (
        <NothingToShow>Nothing to show in favorites</NothingToShow>
      )}
    </Page>
  );
};
