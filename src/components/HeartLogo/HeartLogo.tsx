import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { ReactComponent as Logo } from "../../assets/heart.svg";

export const HeartLogo = () => {
  return (
    <Link to={RoutesUrl.HOME}>
      <Logo />
    </Link>
  );
};
