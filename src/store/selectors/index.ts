import {
  useGetNewBooks,
  useGetIsLoading,
  useGetError,
} from "./newBooksSelectors";
import {
  useGetUserIsLoading,
  useGetUser,
  useGetUserError,
  useGetUserIsLoggedIn,
} from "./userSelectors";
import {
  useGetBook,
  useGetBookIsLoading,
  useGetBookError,
} from "./bookSelectors";
import {
  useGetSearchBooks,
  useGetSearchBooksIsLoading,
  useGetSearchBooksError,
  useGetSearchBooksPage,
  useGetSearchBooksTotal,
} from "./searchBooksSelectors";

import { useGetFavorites } from "./favoritesSelectors";

export {
  useGetNewBooks,
  useGetError,
  useGetIsLoading,
  useGetUserIsLoading,
  useGetUser,
  useGetUserError,
  useGetUserIsLoggedIn,
  useGetBook,
  useGetBookIsLoading,
  useGetBookError,
  useGetSearchBooks,
  useGetSearchBooksIsLoading,
  useGetSearchBooksError,
  useGetSearchBooksPage,
  useGetSearchBooksTotal,
  useGetFavorites,
};
