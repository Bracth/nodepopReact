import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Advert from "../Advert"
import { getLastedsAdverts  } from "../service";
import "./advertsPage.css"
import AdvertsFilter from "./AdvertsFilter";


function AdvertsPage() {
    const [filteredAdverts, setfilteredAdverts] = useState([]);
    const [adverts, setAdverts] = useState([])
    
const handleGetAdverts = async () => {
    try {
        const adverts = await getLastedsAdverts();
        setAdverts(adverts)
        setfilteredAdverts(adverts)
    } catch (error) {
        console.log(error.message)
    }
    }
    
    useEffect(() => {
        handleGetAdverts();
    }, []);
    
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
        
        const tagFilters = [];
        
        if (filters.motor === true) {
            tagFilters.push("motor");
        }
         if (filters.mobile === true) {
            tagFilters.push("mobile");
        }
         if (filters.lifestyle === true) {
            tagFilters.push("lifestyle");
        }
         if (filters.work === true) {
            tagFilters.push("work");
        }
        
        if (tagFilters.length > 0) {
        const result5 = result4.filter(advert => {
            return advert.tags.some(tag => {
                for (const tagFilter of tagFilters) {
                    if (tag === tagFilter) {
                        return true
                    } 
                }
            })
        })
            setfilteredAdverts(result5);
        }
        
        
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