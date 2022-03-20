import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

import "./App.css";
import AdvertsPage from "./components/adverts/advertsPage/AdvertsPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import { AuthContextProvider } from "./components/auth/context";

function App({ isInitiallyLogged }) {

  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  const handleLogin = () => {
    setIsLogged(true);
  }
  
  return (
    <div className="App">
      <AuthContextProvider value={{isLogged, handleLogin}}>
        <Routes>
            <Route path="/" element={<AdvertsPage/>}></Route>
           <Route path="/login" element={<LoginPage />} />
            <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
           <Route path="*" element={<Navigate to="/404"/>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
