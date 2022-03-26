import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navigate, useParams } from "react-router"
import { useState } from "react"

import { deleteAdvert } from "./service"
import Notification from "./notification/Notification"
import img from "../../assets/defaultImgAdvert.jpg"

function Advert({ props }) {
    const { name, sale, price, tags, photo } = props;
    
    const { id } = useParams();
    
    const [needConfirm, setNeedConfirm] = useState(null);
    
    const [advertDeleted, setAdvertDeleted] = useState(null)
    
    const handleConfirmation = (sure) => {
       
        if (sure) {
            deleteAdvert(id);
            setAdvertDeleted(true);
        } else {
            setNeedConfirm(false);
        }
    }
    
    if (advertDeleted) {
         return <Navigate to="/"/>
    }
    
    const handleClick = (event) => {
        setNeedConfirm(true);
    }
    
    return <>{needConfirm? <Notification handleConfirmation={handleConfirmation}>Are you sure you want to delete this advert?</Notification>: null} 
        <Card>
        <Card.Img variant="top" src={!photo? img : photo}/>
        <Card.Body className="p-0">
            <Card.Title className="px-3 mt-2 text-center">{name}</Card.Title>
            <Card.Text className="px-3 mt-2"> 
               <span className="pe-3">{sale? "for sale:" : "for buy:"}</span> 
               <span>{ price }$</span> 
            </Card.Text>
            <Card.Footer>
                <Container>
                    <Row className="justify-content-between">
                        <Col><small className="text-muted">Tags: {tags.map(tag => `${ tag }. `)}</small></Col>
                        { id? <Col md="auto"><Button variant="danger" onClick={handleClick}>Delete</Button></Col> : null}
                    </Row>
                </Container>
                
                
            </Card.Footer>
        </Card.Body>
        </Card>
        </>
}

export default Advert;