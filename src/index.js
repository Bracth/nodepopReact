import React from "react";
import ReactDOM from "react-dom";
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

const store = configureStore({ auth: !!acessToken, adverts: [] });

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}>
      <App isInitiallyLogged={!!acessToken} />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
