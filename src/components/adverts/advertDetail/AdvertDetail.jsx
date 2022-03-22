import { useParams } from "react-router";

import { adverts } from "../service";
import Advert from "../Advert";

function AdvertDetail() {
    const { id } = useParams();
    const advertId = parseInt(id) 
    const advert = adverts.find(advert => advert.id === advertId)
    
    return <Advert props={advert}></Advert>
}

export default AdvertDetail;