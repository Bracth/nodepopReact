import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
}

export default Layout;
