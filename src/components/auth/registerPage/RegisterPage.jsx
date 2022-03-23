import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { login, register } from "../service";
import { useAuth } from "../context";

function RegisterPage() {
    const { handleLogin } = useAuth();
    
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
            await register(credentials);
            const loginCredentials = {email, password, remember: true}
            await login(loginCredentials);
            handleLogin();
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return <main onSubmit={ handleSubmit }>
        <Form>
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
            
             <Form.Group className="mb-3" controlId="formBasicUsername">
                 <Form.Label>Username</Form.Label>
                <Form.Control name="username" value={username} onChange={handleChange} type="text" placeholder="Enter username" />
            </Form.Group>
        
             <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={name} onChange={handleChange} type="name" placeholder="Enter name" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </main>
}


export default RegisterPage;