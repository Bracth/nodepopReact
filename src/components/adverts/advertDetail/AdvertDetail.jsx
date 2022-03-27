import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { getLastedAdvert } from "../service";
import Advert from "../Advert";
import Spinner from "react-bootstrap/esm/Spinner";

function AdvertDetail() {
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams(); 
    const [advert, setAdvert] = useState({
        name: "",
            price: 0,
        sale: true,
        tags: [],
        photo: null
    });
    
    const handleGetAdvert = async (id) => {
        try {
        setIsLoading(true)
        const advert = await getLastedAdvert(id);
        setIsLoading(false)
        setAdvert(advert)
        } catch (error) {
            setIsLoading(false)
        console.log(error.message)
    }
    }
    
    useEffect(() => {
     handleGetAdvert(id);
    }, []);
    
    
    return <>
        {isLoading? <Spinner animation="border" variant="primary"/> : null}
        <Advert props={advert}></Advert>
    </>
}

export default AdvertDetail;