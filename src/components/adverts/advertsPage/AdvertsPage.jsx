import { useState } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Advert from "../Advert"
import { adverts } from "../service";
import "./advertsPage.css"
import AdvertsFilter from "./AdvertsFilter";

function AdvertsPage() {
    
    const [filteredAdverts, setfilteredAdverts] = useState(adverts);
    
    const handleFilter = (filters) => {
        const result = adverts.filter(advert => {
           return advert.name.toLowerCase().includes(filters.name.toLowerCase())
        })
        console.log(result)
    }
    
    return <main>
        <AdvertsFilter handleFilter={handleFilter}/>
        <Row xs={1} md={2} className="g-4">
        {adverts.length ? (adverts.map(filteredAdvert => {
            return <Col key={filteredAdvert.id}>
                <Link id="advert-element" to={`/adverts${filteredAdvert.id}`}>
                    <Advert props={filteredAdvert} />
                </Link>
            </Col>
        }))
            : <h1>There are not adverts</h1> }  
        </Row>
    </main>
}

export default AdvertsPage;