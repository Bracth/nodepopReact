import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notification from "../adverts/notification/Notification";
import "./header.css";
import { authLogoutSucces } from "../../store/actions";
import { getIsLogged } from "../../store/selectors";

function Header() {
  const isLogged = useSelector(getIsLogged);

  const [needConfirm, setNeedconfirm] = useState(null);

  const dispatch = useDispatch();

  const handleConfirmation = async (sure) => {
    if (sure) {
      setNeedconfirm(false);
      dispatch(authLogoutSucces());
    } else {
      setNeedconfirm(false);
    }
  };

  const handleLogoutClick = () => {
    setNeedconfirm(true);
  };

  return (
    <header className="mb-3 mt-3 border-botton-5">
      <Container>
        <Stack direction="horizontal" gap={3}>
          <Link to="/">
            <h2>Nodepop</h2>
          </Link>
          {isLogged ? (
            <>
              <Button variant="outline-secondary" onClick={handleLogoutClick}>
                Logout
              </Button>
              <Button variant="outline-secondary" as={Link} to="/adverts/new">
                Create advert
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline-secondary" as={Link} to="/login">
                Login
              </Button>
              <Button variant="outline-secondary" as={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Stack>
      </Container>
      {needConfirm && (
        <Notification handleConfirmation={handleConfirmation}>
          Are you sure you want to logout?
        </Notification>
      )}
    </header>
  );
}

export default Header;
