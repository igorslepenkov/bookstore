import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { CartLogoIcon as Logo } from "../../assets";
import { CartActiveIcon as ActiveLogo } from "../../assets";

interface IProps {
  isActive: boolean;
}

export const CartLogo = ({ isActive }: IProps) => {
  return (
    <Link to={RoutesUrl.CART}>{isActive ? <ActiveLogo /> : <Logo />}</Link>
  );
};
