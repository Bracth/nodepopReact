import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useAuth } from "../context";
import { login } from "../service";
import ErrorAlert from "../../error/ErrorAlert";
import { useLocation, useNavigate } from "react-router";
import Spinner from "react-bootstrap/esm/Spinner";

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { handleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [error, setError] = useState(false);
    
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        remember: false
    });
    
    const {email, password, remember} = credentials
    
    const handleChange = (event) => {
        setCredentials(credentials => ({
            ...credentials,
            [event.target.name]: 
                event.target.type === "checkbox" 
                    ? event.target.checked
                    : event.target.value,
        }))
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            const response = await login(credentials);
            setIsLoading(false)
            if (response.status === 401) {
                setError(true)
                return new Error("Invalid email or password")
            }
            handleLogin();
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        } catch (error) {
            setIsLoading(false)
            console.log(error.message)
            return error
        }
    }
    
    return <main>
        {error ? <ErrorAlert setError={setError}>Invalid email or password</ErrorAlert> : null} 
        {isLoading? <Spinner animation="border" variant="primary"/> : null}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                <Form.Control name="email" value={email} onChange={handleChange} type="email" placeholder="Enter email" />
                 <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me!" name="remember" value="remember" checked={remember} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </main>
}

export default LoginPage;