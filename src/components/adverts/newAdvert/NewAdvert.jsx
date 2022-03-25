import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import { createAdvert } from "../service";

function NewAdvert() {
    
    const [advertInfo, setAdvertInfo] = useState({
        name: "",
        price: 1,
        saling: "sale",
        lifestyle: false,
        motor: false,
        mobile: false,
        work: false,
        photo: ""
    });
    
    const [disabled, setDisabled] = useState(true)
    
    const { name, price, saling, lifestyle, motor, mobile, work, photo } = advertInfo;
    
    const tags = [];
    
    const handleChange = (event) => {
        setAdvertInfo(info => ({
            ...info,
            [event.target.name]:
                event.target.type === "checkbox" ?
                    event.target.checked
                   : event.target.value
        }))
    }
    
    useEffect(() => { 
        
        if (motor === true) {
            tags.push("motor");
        }
         if (mobile === true) {
            tags.push("mobile");
        }
         if (lifestyle === true) {
            tags.push("lifestyle");
        }
         if (work === true) {
            tags.push("work");
        }
        
        if (name) {
            if (tags.length > 0) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        } else {
            setDisabled(true)
        }
        
    }, [advertInfo]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let sale = true
        
        if (saling === "buy") {
            sale = false
        }
        
        const advertData = { name, price, sale, tags, photo }
        
        console.log(advertData);
        
        createAdvert(advertData);
    } 
    
    return <main>
        <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Enter advert" name="name" value={name} onChange={ handleChange }/>
             </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control type="number" placeholder="Enter Advert Price" name="price" value={ price } onChange={ handleChange }/>
            </Form.Group>
            
        <div key={`inline-radio`} className="mb-3">
            <Form.Check
        inline
        onChange={ handleChange }
        label="SALE"
        name="saling"
        type="radio"
        id={`inline-radio-1`}
        value="sale"
        checked={saling === "sale" ? true : false}
      />
      <Form.Check
        inline
        onChange={ handleChange }
        label="BUY"
        name="saling"
        type="radio"
        id={`inline-radio-2`}
        value="buy" 
        checked={saling === "buy" ? true : false}                
                />
            </div>
            
        <Stack direction="horizontal" className="mt-2" gap={3}>
            <Form.Group className="mb-3" controlId="lifestyle">
                <Form.Check type="checkbox" label="lifestyle" name="lifestyle" value="lifestyle" checked={lifestyle} onChange={ handleChange } inline/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="mobile">
                <Form.Check type="checkbox" label="mobile" name="mobile" value="mobile" checked={mobile} onChange={ handleChange } inline/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="work">
                <Form.Check type="checkbox" label="Work" name="work" value="work" checked={work} onChange={ handleChange } inline/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="motor">
                <Form.Check type="checkbox" label="motor" name="motor" value="motor" checked={motor} onChange={ handleChange } inline/>
            </Form.Group>
            
            </Stack>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select an Image for the advert</Form.Label>
                <Form.Control type="file" onChange={handleChange} name="photo"/>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={disabled}>
                 Submit
            </Button>
            
        </Form>
        
    </main>
}

export default NewAdvert;