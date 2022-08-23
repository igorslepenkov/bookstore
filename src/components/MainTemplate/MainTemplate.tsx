import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyledMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
