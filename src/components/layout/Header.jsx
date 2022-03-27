import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/esm/Button";
import { logout } from "../auth/service";
import { useAuth } from "../auth/context";
import { useState } from "react";

import Notification from "../adverts/notification/Notification"
import "./header.css"

function Header() {
    const { isLogged, handleLogout } = useAuth();
    
    const [needConfirm, setNeedconfirm] = useState(null)
    
    const handleConfirmation = async (sure) => {
        if (sure) {
            await logout();
            setNeedconfirm(false);
            handleLogout();
        } else {
            setNeedconfirm(false);
        }
    }

    const handleLogoutClick = () => {
        setNeedconfirm(true);
    }
    
    return <header className="mb-3 mt-3 border-botton-5">
        <Container>
            <Stack direction="horizontal" gap={3}>
                <Link to="/"><h2>Nodepop</h2></Link>
                {isLogged ? <><Button variant="outline-secondary" onClick={handleLogoutClick}>Logout</Button>
                            <Button variant="outline-secondary" as={Link} to="/adverts/new">Create advert</Button></>
                    : <><Button variant="outline-secondary" as={Link} to="/login">Login</Button>
                        <Button variant="outline-secondary" as={Link} to="/register">Register</Button></>}
            </Stack>
        </Container>
        {needConfirm? <Notification handleConfirmation={handleConfirmation}>Are you sure you want to logout?</Notification> : null}
    </header>
}

export default Header;