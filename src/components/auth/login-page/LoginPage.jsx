import {useState} from "react"
import { login } from "../service";

function LoginPage() {
    
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
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return <main>
        <h1>Login to Nodepop</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" name="email" value={email} onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" value={password} onChange={handleChange}/>
            <input type="checkbox" name="remember" value="remember" checked={remember} onChange={handleChange}/>
            <label htmlFor="remember">remember</label>
            <button>Login</button>
        </form>
    </main>
}

export default LoginPage;