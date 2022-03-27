import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { login, register } from "../service";
import { useAuth } from "../context";
import { useLocation, useNavigate } from "react-router";
import Spinner from "react-bootstrap/esm/Spinner";

function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { handleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        username: "",
        name: ""
    });
    
    const {email, password, username, name} = credentials
    
    const handleChange = (event) => {
        setCredentials(credentials => ({
            ...credentials,
            [event.target.name]: event.target.value,
        }))
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            await register(credentials);
            const loginCredentials = {email, password, remember: true}
            await login(loginCredentials);
            setIsLoading(false)
            handleLogin();
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return <main onSubmit={ handleSubmit }>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                <Form.Control required name="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
                 <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            </Form.Group>
            
             <Form.Group className="mb-3" controlId="formBasicUsername">
                 <Form.Label>Username</Form.Label>
                <Form.Control required name="username" value={username} onChange={handleChange} type="text" placeholder="Enter username" />
            </Form.Group>
        
             <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label>Name</Form.Label>
                <Form.Control required name="name" value={name} onChange={handleChange} type="name" placeholder="Enter name" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        {isLoading? <Spinner animation="border" variant="primary"/> : null} 
    </main>
}


export default RegisterPage;