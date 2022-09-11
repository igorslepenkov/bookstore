import { useAppSelector } from "../hooks";

export const useGetUser = () => useAppSelector((state) => state.user.user);
export const useGetUserIsLoggedIn = () =>
  useAppSelector((state) => state.user.isLoggedIn);
export const useGetUserIsLoading = () =>
  useAppSelector((state) => state.user.isLoading);
export const useGetUserError = () =>
  useAppSelector((state) => state.user.error);
