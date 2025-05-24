import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function Card3(props) {
  const price = props.price;
  const img = props.img;
  const title = props.title;
  return (
    <>
      <div className="Gwrapper">
        <div className="gImage">
          <img src={img} width={260} height={400} alt="" />
        </div>
        <div className="gData">
          <div className="Gtext-wrapper">
            <h1 className="Text">{title}</h1>
            <h3 className="Text">${price}.00</h3>
          </div>
          <div className="gCart">
            <NavLink to={"/cart"}
              style={{
                color:"black",
                backgroundColor: "white",
                padding: "15px 10px",
                borderRadius: "10px",
              }}
            >
              <IoCartOutline size={40} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card3;
