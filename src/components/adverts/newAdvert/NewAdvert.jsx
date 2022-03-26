import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import { createAdvert } from "../service";
import { Navigate } from "react-router";

function NewAdvert() {
    
    const [advertInfo, setAdvertInfo] = useState({
        name: "",
        price: 1,
        saling: "sale",
        lifestyle: false,
        motor: false,
        mobile: false,
        work: false,
    });
    
    const [tags, setTags] = useState([])
    
    const [photo, setPhoto] = useState(null)
    
    const [disabled, setDisabled] = useState(true)
    
    const [advertId, setAdvertId] = useState(null)
    
    const { name, price, saling, lifestyle, motor, mobile, work} = advertInfo;
    
    const handleChange = (event) => {
        setAdvertInfo(advertInfo => ({
            ...advertInfo,
            [event.target.name]:
                event.target.type === "checkbox" ?
                    event.target.checked
                   : event.target.value
        }))
    }
    
    useEffect(() => { 
        
        const filterTags = [];
        
        if (motor === true) {
            filterTags.push("motor");
        }
         if (mobile === true) {
            filterTags.push("mobile");
        }
         if (lifestyle === true) {
            filterTags.push("lifestyle");
        }
         if (work === true) {
            filterTags.push("work");
        }
        
        if (name) {
            if (filterTags.length > 0) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        } else {
            setDisabled(true)
        }
        
        setTags(filterTags);
        
    }, [advertInfo]);
    
    const handleCreateAdvert = async (formData) => {
        const advert = await createAdvert(formData);
        setAdvertId(advert.id)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let sale = true
        
        if (saling === "buy") {
            sale = false
        }
        
        const formData = new FormData()
        
        formData.append("name", name)
        formData.append("price", price)
        formData.append("sale", sale)
        formData.append("tags", tags)
        if (photo) {
        formData.append("photo", photo)
        }
       
        handleCreateAdvert(formData);
        
    } 
    
    const uploadImage = (event) => {
        setPhoto(event.target.files[0]);
    }
    
    if (advertId) {
    return <Navigate to={`/adverts${advertId}`}/>
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
                <Form.Control type="file" onChange={uploadImage} name="photo"/>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={disabled}>
                 Submit
            </Button>
            
        </Form>
        
    </main>
}

export default NewAdvert;