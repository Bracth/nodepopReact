import { useState, useEffect } from "react";

import Spinner from "react-bootstrap/esm/Spinner";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { createAdvert } from "../service";
import { Navigate } from "react-router";
import SelectTags from "../selectTags/SelectTags";

function NewAdvert() {
    
    const [selectTags, setSelectTags] = useState([]);
    
     const [isLoading, setIsLoading] = useState(false);
    
    const [advertInfo, setAdvertInfo] = useState({
        name: "",
        price: 1,
        saling: "sale",
    });
    
    const [photo, setPhoto] = useState(null)
    
    const [disabled, setDisabled] = useState(true)
    
    const [advertId, setAdvertId] = useState(null)
    
    const { name, price, saling } = advertInfo;
    
    const handleChange = (event) => {
        setAdvertInfo(advertInfo => ({
            ...advertInfo,
            [event.target.name]: event.target.value
        }))
    }
    
    
    const handleCreateAdvert = async (formData) => {
        try {
        setIsLoading(true)
        const advert = await createAdvert(formData);
        setIsLoading(false)
        setAdvertId(advert.id)
        } catch (error) {
            setIsLoading(false)
            console.log(error.message)
        }
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
        formData.append("tags", selectTags)
        if (photo) {
        formData.append("photo", photo)
        }
       
        handleCreateAdvert(formData);
        
    } 
    
    const uploadImage = (event) => {
        setPhoto(event.target.files[0]);
    }
    
    if (advertId) {
    return <Navigate to={`/adverts/${advertId}`}/>
  }
    
    return <main>
        <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Enter advert" name="name" value={name} onChange={ handleChange }/>
             </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control min={1} max={10000} type="number" placeholder="Enter Advert Price" name="price" value={ price } onChange={ handleChange }/>
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
            
            <SelectTags props={{ selectTags, setSelectTags }}></SelectTags>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select an Image for the advert</Form.Label>
                <Form.Control type="file" onChange={uploadImage} name="photo"/>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={selectTags.length > 0 && name && price ? false : disabled}>
                 Submit
            </Button>
            
        </Form>
        
        {isLoading? <Spinner animation="border" variant="primary"/> : null} 
        
    </main>
}

export default NewAdvert;