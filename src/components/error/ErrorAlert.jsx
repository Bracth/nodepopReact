import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiResetError } from "../../store/actions";

function ErrorAlert({ setError, children }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    dispatch(uiResetError());
  };

  if (show) {
    return (
      <Alert variant="danger" onClose={handleClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{children}</p>
      </Alert>
    );
  } else {
    return null;
  }
}

export default ErrorAlert;
