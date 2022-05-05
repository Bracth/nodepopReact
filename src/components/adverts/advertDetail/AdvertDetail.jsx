import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { getLastedAdvert } from "../service";
import Advert from "../Advert";
import Spinner from "react-bootstrap/esm/Spinner";
import ErrorAlert from "../../error/ErrorAlert";

function AdvertDetail() {
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams(); 
    const [advert, setAdvert] = useState(null);
    const [error, setError] = useState(false);
    
    const handleGetAdvert = async (id) => {
        try {
        setIsLoading(true)
        const advert = await getLastedAdvert(id);
        setIsLoading(false)
        setAdvert(advert)
        } catch (error) {
            setIsLoading(false)
            console.log(error.message)
            setError(true);
    }
    }
    
    useEffect(() => {
     handleGetAdvert(id);
    }, [id]);
    
    
    return <>
        {isLoading ? <Spinner animation="border" variant="primary" /> : null}
        {error? <ErrorAlert setError={setError}>Advert not found</ErrorAlert> : null}
        {advert? <Advert props={advert}></Advert> : null}
    </>
}

export default AdvertDetail;