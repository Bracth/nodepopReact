import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import AdvertsPage from "./components/adverts/advertsPage/AdvertsPage";
import LoginPage from "./components/auth/loginPage/LoginPage";
import Layout from "./components/layout/Layout";
import AdvertDetail from "./components/adverts/advertDetail/AdvertDetail";
import RequireAuth from "./components/auth/RequireAuth";
import RegisterPage from "./components/auth/registerPage/RegisterPage";
import NewAdvert from "./components/adverts/newAdvert/NewAdvert";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/adverts" />}></Route>
          <Route
            path="/adverts"
            element={
              <RequireAuth>
                <Outlet />
              </RequireAuth>
            }
          >
            <Route index element={<AdvertsPage></AdvertsPage>}></Route>
            <Route path=":id" element={<AdvertDetail />}></Route>
            <Route path="new" element={<NewAdvert />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
