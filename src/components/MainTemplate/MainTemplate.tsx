import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { OutletWrapper, StyledMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </StyledMainTemplate>
  );
};
