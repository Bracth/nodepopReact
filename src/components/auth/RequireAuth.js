import { Navigate } from "react-router";
import { useAuth } from "./context";

function RequireAuth({ children }) {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default RequireAuth;
