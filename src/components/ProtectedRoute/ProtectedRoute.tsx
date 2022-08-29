import { Navigate, Outlet } from "react-router-dom";
import { useIsUserSignedIn } from "../../hooks";
import { RoutesUrl } from "../../router";

export const ProtectedRoute = () => {
  const isUserSignedIn = useIsUserSignedIn();
  if (isUserSignedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={RoutesUrl.REGISTER} />;
  }
};
