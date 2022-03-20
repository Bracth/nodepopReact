import {Routes, Route, Navigate} from "react-router-dom"

import "./App.css";
import AdvertsPage from "./components/adverts/advertsPage/AdvertsPage";
import LoginPage from "./components/auth/login-page/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdvertsPage/>}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
        <Route path="*" element={<Navigate to="/404"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;