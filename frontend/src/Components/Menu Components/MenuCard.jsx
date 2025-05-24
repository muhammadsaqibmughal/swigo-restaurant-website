import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function MenuCard(props) {
  const img=props.img;
  const name=props.name;
  const price=props.price;
  const rate=props.rate;
  const dsc=props.dsc;
  
  return (
    <>
        
          <Col lg={4} md={6} sm={12} className="menuCard-wrapper">
            <div className="ItemWrapper">
              <div className="ItemImg">
                <img
                  src={img}
                  alt=""
                  width={"300"}
                  height={"250px"}
                />
              </div>
              <div className="rating">
                <FaStar size={20} color="#FE9F10" />
                <span style={{ marginLeft: "10px" }}>{rate}</span>
              </div>
              <div className="topSeller">
                <span>TOP SELLER</span>
              </div>
              <div className="ItemDetail">
                <NavLink className="itemTitle">
                  <h3>{name}</h3>
                </NavLink>
                <p>
                 {dsc}
                </p>
                <h4 className="itemPrice">${price}</h4>
              </div>
            </div>
          </Col>
    </>
  );
}

export default MenuCard;
