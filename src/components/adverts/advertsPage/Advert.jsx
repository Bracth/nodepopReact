function Advert({props}) {
    const { name, sale, price, tags, img } = props;
    
    return <section>
        <img src={img} alt="" />
        <h1>{ name }</h1>
        <span>{ sale }</span>
        <span>{ price }</span>
        <p>Tags: { tags }</p>
    </section>
}

export default Advert;