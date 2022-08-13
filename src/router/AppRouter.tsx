import { Route, Routes } from "react-router-dom";
import { BookPage } from "../components/BookPage";
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
      </Route>
    </Routes>
  );
};
