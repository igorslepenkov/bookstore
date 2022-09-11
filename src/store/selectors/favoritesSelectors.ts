import { useAppSelector } from "../hooks";

export const useGetFavorites = () =>
  useAppSelector((state) => state.favorites.favorites);
