import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { StyledLogo } from "./style";

export const UserLogo = () => {
  return (
    <Link to={RoutesUrl.ACCOUNT}>
      <StyledLogo />
    </Link>
  );
};
