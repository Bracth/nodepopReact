import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import Advert from "../Advert"
import { getLastedsAdverts } from "../service";
import storage from "../../../utils/storage";
import "./advertsPage.css"
import AdvertsFilter from "./AdvertsFilter";
import Spinner from "react-bootstrap/Spinner"


function AdvertsPage() {
    const [filteredAdverts, setfilteredAdverts] = useState([]);
    const [adverts, setAdverts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    
const handleGetAdverts = async () => {
    try {
        setIsLoading(true)
        const adverts = await getLastedsAdverts();
        setIsLoading(false)
        setAdverts(adverts)
        setfilteredAdverts(adverts)
    } catch (error) {
        setIsLoading(false)
        console.log(error.message)
    }
    }
    
    useEffect(() => {
        handleGetAdverts();
        const storageFilters = storage.get("filters")
        if (storageFilters) {
            handleFilter(storageFilters)
        }
    }, []);
    
    const handleFilter = (filters) => {
        let tagFilter = null
        
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
        
         if (filters.lifestyle === true) {
            tagFilter = "lifestyle";
        }
        
        const result5 = result4.filter(advert => {
            if (tagFilter) {
                return advert.tags.includes(tagFilter)
            }
            return true
        })
        
         if (filters.mobile === true) {
            tagFilter = "mobile";
        }
        
        const result6 = result5.filter(advert => {
            if (tagFilter) {
                return advert.tags.includes(tagFilter)
            }
            return true
        })
        
        if (filters.motor === true) {
            tagFilter = "motor";
        }
        
        const result7 = result6.filter(advert => {
            if (tagFilter) {
                return advert.tags.includes(tagFilter)
            }
            return true
        })
        
        if (filters.work === true) {
            tagFilter = "work";
        }
        
        const result8 = result7.filter(advert => {
            if (tagFilter) {
                return advert.tags.includes(tagFilter)
            }
            return true
        })
        
        setfilteredAdverts(result8)

    }
    
   
    
    return <main>
        <AdvertsFilter handleFilter={handleFilter} />
        {isLoading? <Spinner animation="border" variant="primary"/> : null} 
        <Row xs={1} md={2} className="g-4">
        {adverts.length ? (filteredAdverts.map(filteredAdvert => {
            return <Col key={filteredAdvert.id}>
                <Link id="advert-element" to={`/adverts/${filteredAdvert.id}`}>
                    <Advert props={filteredAdvert} />
                </Link>
            </Col>
        }))
                :<div>
                    <h1>There are not adverts</h1>
                         <Button variant="outline-primary" as={Link} to="/adverts/new">Create the first advert</Button>
                </div>}  
        </Row>
    </main>
}

export default AdvertsPage;