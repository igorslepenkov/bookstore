import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ThemeChanger } from "../ThemeChanger";
import { StyledMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <ThemeChanger />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
