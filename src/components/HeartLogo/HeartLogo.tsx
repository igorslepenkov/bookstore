import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { StyledLogo, StyledActiveLogo } from "./style";

interface IProps {
  isActive: boolean;
}

export const HeartLogo = ({ isActive }: IProps) => {
  return (
    <Link to={RoutesUrl.FAVORITES}>
      {isActive ? <StyledActiveLogo /> : <StyledLogo />}
    </Link>
  );
};
