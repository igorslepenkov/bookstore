import { useAppSelector } from "../hooks";

export const useGetSearchBooks = () =>
  useAppSelector((state) => state.searchBooks.searchBooks);
export const useGetSearchBooksIsLoading = () =>
  useAppSelector((state) => state.searchBooks.isLoading);
export const useGetSearchBooksError = () =>
  useAppSelector((state) => state.searchBooks.error);
export const useGetSearchBooksPage = () =>
  useAppSelector((state) => state.searchBooks.page);
export const useGetSearchBooksTotal = () =>
  useAppSelector((state) => state.searchBooks.total);
