import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Notification({ children, handleConfirmation }) {
    
    const handleClick = (event) => {
        let sure = event.target.value;
        if (sure === "true") {
            sure = true;
        } else {
            sure = false;
        }
        
        handleConfirmation(sure);
    }
    
    return <Card className="text-center m-3" border="warning">
        <Card.Body>
            <Card.Text>
                <h2>{children}</h2>
            </Card.Text>
                <Container>
                    <Row className="justify-content-betwenn">
                        <Col><Button variant="outline-success" value={true} onClick={handleClick}>Comfirm!!!</Button></Col>
                        <Col><Button variant="outline-danger" value={false} onClick={handleClick}>Maybe not!!!</Button></Col>
                    </Row>
                </Container>
        </Card.Body>
    </Card>
}

export default Notification;