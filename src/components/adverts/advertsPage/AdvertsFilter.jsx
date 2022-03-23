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
        </Form>
}

export default AdvertsFilter;