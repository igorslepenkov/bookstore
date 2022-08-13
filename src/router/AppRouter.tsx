import { Route, Routes } from "react-router-dom";
import { MainPage } from "../components/MainPage";
import { MainTemplate } from "../components/MainTemplate";
import { RoutesUrl } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<MainTemplate />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
