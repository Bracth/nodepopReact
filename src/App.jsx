import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

import AdvertsPage from "./components/adverts/advertsPage/AdvertsPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import { AuthContextProvider } from "./components/auth/context";
import Layout from "./components/layout/Layout";
import AdvertDetail from "./components/adverts/advertDetail/AdvertDetail";

function App({ isInitiallyLogged }) {

  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  const handleLogin = () => {
    setIsLogged(true);
  }
  
  const handleLogout = () => {
    setIsLogged(false)
  }
  
  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={ <Navigate to="/adverts"/> }></Route>
             <Route path="/adverts" element={<AdvertsPage />}></Route>
             <Route path="/adverts:id" element={ <AdvertDetail/>}></Route>
             <Route path="/login" element={<LoginPage />} />
             <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
             <Route path="*" element={<Navigate to="/404" />}></Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
