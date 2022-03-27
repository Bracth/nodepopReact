import Alert from "react-bootstrap/Alert";
import { useState } from "react";

function ErrorAlert({setError, children}) {
        const [show, setShow] = useState(true);

    const handleClose = () => {
            setShow(false)
            setError(false)
}

        if (show) {
            return (
                <Alert variant="danger" onClose={handleClose} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {children}
                    </p>
                </Alert>
            );
        } else {
            return null
        }
}

export default ErrorAlert;