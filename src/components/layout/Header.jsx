import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/esm/Button";
import { logout } from "../auth/service";
import { useAuth } from "../auth/context";

function Header() {
    const { isLogged, handleLogout } = useAuth();

    const handleLogoutClick = async() => {
        await logout();
        handleLogout();
    }
    
    return <header>
        <Container>
            <Stack direction="horizontal" gap={3}>
                <Link to="/"><h2>Nodepop</h2></Link>
                {isLogged ? <Button variant="outline-secondary" onClick={handleLogoutClick}>Logout</Button>
                    : <Button variant="outline-secondary" as={Link} to="/login">Login</Button>}
            </Stack>
            
        </Container>
    </header>
}

export default Header;