import { Navigate, Outlet } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { getUserIsLoggedIn } from "../../store";
import { useAppSelector } from "../../store/hooks";

export const ProtectedRoute = () => {
  const isUserSignedIn = useAppSelector(getUserIsLoggedIn);
  if (isUserSignedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={RoutesUrl.REGISTER} />;
  }
};
