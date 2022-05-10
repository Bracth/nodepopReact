import { Navigate, useLocation } from "react-router";
import { getIsLogged } from "../../store/selectors";
import { useSelector } from "react-redux";

function RequireAuth({ children }) {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
