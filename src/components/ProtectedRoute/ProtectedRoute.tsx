import { Navigate, Outlet } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { useGetUserIsLoggedIn } from "../../store";

export const ProtectedRoute = () => {
  const isUserSignedIn = useGetUserIsLoggedIn();
  if (isUserSignedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={RoutesUrl.REGISTER} />;
  }
};
