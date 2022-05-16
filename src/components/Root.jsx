import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const Root = ({ children, store }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export default Root;