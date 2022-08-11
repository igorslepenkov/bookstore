import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { RoutesUrl } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<MainTemplate />}></Route>
    </Routes>
  );
};
