

function Card4(props)
{
    const title=props.title;
    const description=props.description;
    const img=props.img;
    return(
        <>
        <div className="AWrapper">
           <div className="img-wrapper">
            <span><img src={img} alt="" /></span>
           
           </div>
            <div className="text-wrapper">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card4;