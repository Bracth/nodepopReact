import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useAuth } from "../context";
import { login } from "../service";

function LoginPage() {
    
    const { handleLogin } = useAuth();
    
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
            await login(credentials);
            handleLogin();
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return <main>
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