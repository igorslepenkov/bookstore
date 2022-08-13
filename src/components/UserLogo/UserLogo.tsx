import { Link } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { ReactComponent as Logo } from "../../assets/person.svg";

export const UserLogo = () => {
  return (
    <Link to={RoutesUrl.HOME}>
      <Logo />
    </Link>
  );
};
