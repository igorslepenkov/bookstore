import { FavoritesCard, Page, SimilarBooksList } from "../../components";
import { Title } from "../../components";
import { usePopularBooks } from "../../hooks";
import { useAppSelector } from "../../store/hooks";
import { getFavorites } from "../../store/selectors";
import { FavoritesList, NothingToShow } from "./style";

export const FavoritesPage = () => {
  const favorites = useAppSelector(getFavorites);
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
      <>
        {popularBooks && (
          <>
            <Title text="Popular books" titleGrade={2} />
            <SimilarBooksList similarBooks={popularBooks} />
          </>
        )}
      </>
    </Page>
  );
};
