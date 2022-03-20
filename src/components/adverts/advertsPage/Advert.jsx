import img from "../../../assets/defaultImgAdvert.jpg"

function Advert() {
    return <section>
        <img src={img} alt="" />
        <h1>Movil</h1>
        <span>Sale</span>
        <span>150$</span>
        <p>Tags: Movil</p>
    </section>
}

export default Advert;