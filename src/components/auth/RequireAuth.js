import { Navigate, useLocation } from "react-router";
import { useAuth } from "./context";

function RequireAuth({ children }) {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
