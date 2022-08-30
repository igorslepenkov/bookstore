import { Route, Routes } from "react-router-dom";
import {
  AccountPage,
  ConfirmPasswordResetPage,
  NotFoundPage,
  ResetPasswordPage,
} from "../pages";
import { BookPage } from "../pages";
import { CartPage } from "../pages";
import { FavoritesPage } from "../pages";
import { MainPage } from "../pages";
import { MainTemplate } from "../components";
import { RegisterPage } from "../pages";
import { SearchPage } from "../pages";
import { RoutesUrl } from "./routes";
import { ErrorPage } from "../pages";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<MainTemplate />}>
        <Route index element={<MainPage />} />
        <Route path={RoutesUrl.SEARCH} element={<SearchPage />} />
        <Route path={RoutesUrl.BOOK} element={<BookPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={RoutesUrl.CART} element={<CartPage />} />
          <Route path={RoutesUrl.FAVORITES} element={<FavoritesPage />} />
          <Route path={RoutesUrl.ACCOUNT} element={<AccountPage />} />
        </Route>
        <Route path={RoutesUrl.REGISTER} element={<RegisterPage />} />
        <Route path={RoutesUrl.ERROR} element={<ErrorPage />} />
        <Route path={RoutesUrl.RESET} element={<ResetPasswordPage />} />
        <Route
          path={RoutesUrl.CONFIRM_RESET}
          element={<ConfirmPasswordResetPage />}
        />
        <Route path={RoutesUrl.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
