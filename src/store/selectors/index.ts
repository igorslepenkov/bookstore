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
};
