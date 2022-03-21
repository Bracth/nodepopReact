import { Navigate } from "react-router";
import { AuthContextConsumer } from "./context";

const RequireAuth = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

const ConectedRequireAuth = (props) => {
  <AuthContextConsumer>
    {({ isLogged }) => <RequireAuth isLogged={isLogged} {...props} />}
  </AuthContextConsumer>;
};

export default ConectedRequireAuth;
