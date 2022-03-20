import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";

const acessToken = storage.get("auth");
setAuthorizationHeader(acessToken);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App isInitiallyLogged={!!acessToken} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
