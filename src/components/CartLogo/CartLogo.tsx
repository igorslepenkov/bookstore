import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { CartLogo as Logo } from "../../assets";

export const CartLogo = () => {
  return (
    <Link to={RoutesUrl.HOME}>
      <Logo />
    </Link>
  );
};
