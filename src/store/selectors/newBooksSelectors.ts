import { useAppSelector } from "../hooks";

export const useGetNewBooks = () =>
  useAppSelector((state) => state.newBooks.newBooks);
export const useGetIsLoading = () =>
  useAppSelector((state) => state.newBooks.isLoading);
export const useGetError = () =>
  useAppSelector((state) => state.newBooks.error);
