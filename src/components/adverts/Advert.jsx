import Card from "react-bootstrap/Card"

function Advert({ props }) {
    const { name, sale, price, tags, img } = props;
    
    return <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="p-0">
            <Card.Title className="px-3 mt-2 text-center">{name}</Card.Title>
            <Card.Text className="px-3 mt-2"> 
               <span className="pe-3">{sale? "for sale:" : "for buy:"}</span> 
               <span>{ price }$</span> 
            </Card.Text>
            <Card.Footer>
                <small className="text-muted">Tags: {tags.map(tag => `${tag}. `)}</small>
            </Card.Footer>
        </Card.Body>
    </Card>
}

export default Advert;