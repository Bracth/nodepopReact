import { Outlet } from "react-router"
import  Container  from "react-bootstrap/Container"

import Header from "./Header"
import Footer from "./Footer"

function Layout() {
    return <>
        <Header></Header>
        <Container>
            <Outlet />
        </Container>
        <Footer></Footer>
    </>
}

export default Layout;