import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { ReactComponent as Logo } from "../../assets/cart.svg";

export const CartLogo = () => {
  return (
    <Link to={RoutesUrl.HOME}>
      <Logo />
    </Link>
  );
};
