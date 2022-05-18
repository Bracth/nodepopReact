import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { uiResetError } from "../../store/actions";
import { getUi } from "../../store/selectors";

function ErrorAlert({ setError, children }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiResetError());
  };

  const { error } = useSelector(getUi);

  if (error) {
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
