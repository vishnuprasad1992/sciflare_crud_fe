import { Navigate, useLocation } from "react-router-dom";

function AppAuth({ isUserLoggedIn, children }) {
  let location = useLocation();
  if (!isUserLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
}

export default AppAuth;
