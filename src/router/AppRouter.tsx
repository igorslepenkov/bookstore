import { Route, Routes } from "react-router-dom";
import { AccountPage } from "../pages/AccountPage";
import { BookPage } from "../pages/BookPage";
import { CartPage } from "../pages/CartPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { MainPage } from "../pages/MainPage";
import { MainTemplate } from "../components/MainTemplate";
import { RegisterPage } from "../pages/RegisterPage";
import { SearchPage } from "../pages/SearchPage";
import { RoutesUrl } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<MainTemplate />}>
        <Route index element={<MainPage />} />
        <Route path={RoutesUrl.SEARCH} element={<SearchPage />} />
        <Route path={RoutesUrl.BOOK} element={<BookPage />} />
        <Route path={RoutesUrl.CART} element={<CartPage />} />
        <Route path={RoutesUrl.FAVORITES} element={<FavoritesPage />} />
        <Route path={RoutesUrl.ACCOUNT} element={<AccountPage />} />
        <Route path={RoutesUrl.REGISTER} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
