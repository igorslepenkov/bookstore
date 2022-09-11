import { useAppSelector } from "../hooks";

export const useGetBookIsLoading = () =>
  useAppSelector((state) => state.book.isLoading);
export const useGetBook = () => useAppSelector((state) => state.book.book);
export const useGetBookError = () =>
  useAppSelector((state) => state.book.error);
