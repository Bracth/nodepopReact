import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/Root";

import configureStore from "./store";

const acessToken = storage.get("auth");
if (acessToken) {
  setAuthorizationHeader(acessToken);
}

const history = createBrowserHistory();

const store = configureStore({ auth: !!acessToken }, { history });

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history}>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
