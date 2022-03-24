import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form"


function AdvertsFilter({ handleFilter }) {

    const [filters, setFilters] = useState({
        name: "",
        sale: "all",
        minPrice: 1,
        maxPrice: 10000
    });
    
    const { name, sale, minPrice, maxPrice } = filters;
    
    const handleChange = (event) => {
        setFilters(filters => ({
            ...filters,
            [event.target.name]: event.target.value
        }))
    }
    
    useEffect(() => {
        handleFilter(filters)
    }, [filters]);

    return <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={name} onChange={handleChange} name="name"  type="text" placeholder="Enter advert name" />
        </Form.Group>
        
    <div key={`inline-radio`} className="mb-3">
            <Form.Check
        onChange={handleChange}
        inline
        label="ALL"
        name="sale"
        type="radio"
        id={`inline-radio-1`}
        value="all"
        checked={sale === "all" ? true : false}
      />
      <Form.Check
        inline
        onChange={handleChange}
        label="SALE"
        name="sale"
        type="radio"
        id={`inline-radio-2`}
        value="sale"
        checked={sale === "sale" ? true : false}       
      />
        <Form.Check
        onChange={handleChange}
        inline
        label="BUY"
        name="sale"
        type="radio"
        id={`inline-radio-3`}
        value="buy"
        checked={sale === "buy" ? true : false}
            />
        </div>
    
        <Form.Label>Min Price: { minPrice }€</Form.Label>
        <Form.Range onChange={handleChange} value={minPrice} min={1} max={maxPrice } name="minPrice"/>
        
        <Form.Label>Max Price: { maxPrice }€</Form.Label>
        <Form.Range onChange={handleChange} value={maxPrice} min={minPrice} max={10000 } name="maxPrice"/>    
        </Form>
}

export default AdvertsFilter;