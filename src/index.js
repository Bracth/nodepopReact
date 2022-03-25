import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";
import "bootstrap/dist/css/bootstrap.min.css";

const acessToken = storage.get("auth");
if (acessToken) {
  setAuthorizationHeader(acessToken);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App isInitiallyLogged={!!acessToken} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
