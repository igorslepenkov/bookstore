import { Route, Routes } from "react-router-dom";
import { BookPage } from "../components/BookPage";
import { CartPage } from "../components/CartPage";
import { FavoritesPage } from "../components/FavoritesPage";
import { MainPage } from "../components/MainPage";
import { MainTemplate } from "../components/MainTemplate";
import { SearchPage } from "../components/SearchPage";
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
      </Route>
    </Routes>
  );
};
