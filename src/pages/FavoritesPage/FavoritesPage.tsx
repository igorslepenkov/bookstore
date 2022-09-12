import { FavoritesCard, Page, SimilarBooksList } from "../../components";
import { Title } from "../../components";
import { usePopularBooks } from "../../hooks";
import { useGetFavorites } from "../../store";
import { FavoritesList, NothingToShow } from "./style";

export const FavoritesPage = () => {
  const favorites = useGetFavorites();
  const popularBooks = usePopularBooks();
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
      {popularBooks && <SimilarBooksList similarBooks={popularBooks} />}
    </Page>
  );
};
