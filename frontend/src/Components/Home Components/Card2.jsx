function Card2(props)
{
    const title=props.title;
    const description=props.description;
    const img=props.img;
    return(
        <>
        <div className="QWrapper">
           <div className="img-wrapper">
           <img src={img} alt="" />
           </div>
            <div className="text-wrapper">
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card2;