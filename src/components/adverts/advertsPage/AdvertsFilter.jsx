import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form"

function AdvertsFilter({ handleFilter }) {

    const [filters, setFilters] = useState({
        name: ""
    });
    
    const { name } = filters;
    
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
        inline
        label="ALL"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
      />
      <Form.Check
        inline
        label="SALE"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
      />
      <Form.Check
        inline
        label="BUY"
        name="group1"
        type="radio"
        id={`inline-radio-3`}
            />
            </div>
        </Form>
}

export default AdvertsFilter;