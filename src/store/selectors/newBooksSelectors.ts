import { useAppSelector } from "../hooks";

export const getNewBooks = () =>
  useAppSelector((state) => state.newBooks.newBooks);
export const getIsLoading = () =>
  useAppSelector((state) => state.newBooks.isLoading);
export const getError = () => useAppSelector((state) => state.newBooks.error);
