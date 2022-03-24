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
        
        const result2 = result.filter(advert => {
            if (filters.sale === "sale") {
                return advert.sale;
            } else if (filters.sale === "buy") {
                return !advert.sale;
            } else {
                return advert;
            }
        })
        
        const result3 = result2.filter(advert => {
            if (advert.price >= filters.minPrice) {
                return advert
            }
        })
        
         const result4 = result3.filter(advert => {
            if (advert.price <= filters.maxPrice) {
                return advert
            }
        })
        
        
        setfilteredAdverts(result4)
    }
    
    return <main>
        <AdvertsFilter handleFilter={handleFilter}/>
        <Row xs={1} md={2} className="g-4">
        {adverts.length ? (filteredAdverts.map(filteredAdvert => {
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