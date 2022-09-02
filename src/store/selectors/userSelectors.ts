import { useAppSelector } from "../hooks";

export const getUser = () => useAppSelector((state) => state.user.user);
export const getUserIsLoggedIn = () =>
  useAppSelector((state) => state.user.isLoggedIn);
export const getUserIsLoading = () =>
  useAppSelector((state) => state.user.isLoading);
export const getUserError = () => useAppSelector((state) => state.user.error);
