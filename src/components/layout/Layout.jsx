import { Outlet } from "react-router"

import Header from "./Header"
import Footer from "./Footer"

function Layout() {
    return <>
        <Header></Header>
        <div className="container">
            <Outlet />
        </div>
        <Footer></Footer>
    </>
}

export default Layout;