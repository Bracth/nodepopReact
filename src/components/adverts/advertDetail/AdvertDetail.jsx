import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { getLastedAdvert } from "../service";
import Advert from "../Advert";

function AdvertDetail() {
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
        const advert = await getLastedAdvert(id);
        setAdvert(advert)
    } catch (error) {
        console.log(error.message)
    }
    }
    
    useEffect(() => {
     handleGetAdvert(id);
    }, []);
    
    
    return <Advert props={advert}></Advert>
}

export default AdvertDetail;