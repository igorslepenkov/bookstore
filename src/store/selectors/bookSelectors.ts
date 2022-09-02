import { useAppSelector } from "../hooks";

export const getBookIsLoading = () =>
  useAppSelector((state) => state.book.isLoading);
export const getBook = () => useAppSelector((state) => state.book.book);
export const getBookError = () => useAppSelector((state) => state.book.error);
