import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { StyledLogo } from "./style";

export const HeartLogo = () => {
  return (
    <Link to={RoutesUrl.FAVORITES}>
      <StyledLogo />
    </Link>
  );
};
