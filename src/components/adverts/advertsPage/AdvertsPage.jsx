import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Advert from "./Advert"
import { adverts } from "../service";

function AdvertsPage() {
    return <main>
        <Row xs={1} md={2} className="g-4">
        {adverts.length ? (adverts.map(advert => {
            return <Col>
                <Advert key={advert.id} props={advert} />
            </Col>
        }))
            : <h1>There are not adverts</h1> }  
        </Row>
    </main>
}

export default AdvertsPage;