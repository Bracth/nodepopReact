import Advert from "./Advert"
import { adverts } from "../service";

function AdvertsPage() {
    return <main>
        {adverts.length ? (adverts.map(advert => {
            return <Advert key={advert.id} props={ advert }/>
        }))
            : <h1>There are not adverts</h1> }
    </main>
}

export default AdvertsPage;