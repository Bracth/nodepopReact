import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authRegister } from "../../../store/actions";
import { getUi } from "../../../store/selectors";
import ErrorAlert from "../../error/ErrorAlert";

function RegisterPage() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
  });

  const { email, password, username, name } = credentials;

  const { isLoading, error } = useSelector(getUi);

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authRegister(credentials));
    const loginCredentials = { email, password, remember: true };
    dispatch(authLogin(loginCredentials));
  };

  return (
    <main onSubmit={handleSubmit}>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <ErrorAlert>Advert not found</ErrorAlert>}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            name="username"
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            value={name}
            onChange={handleChange}
            type="name"
            placeholder="Enter name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default RegisterPage;
