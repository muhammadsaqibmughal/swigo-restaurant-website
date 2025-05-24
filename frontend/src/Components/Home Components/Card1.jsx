import {
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardTitle,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Card1(props) {
  let title=props.title;
  let price=props.price;
  let description=props.description;
  let img=props.img;
  return (
    <>
              <div className="mainWrapper">
                  <div className="overlap">
                        <svg width="266.7" height="146" viewBox="0 0 270 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="135" cy="-52" r="198" fill="#F5F5F5" className="svgColor"/>
                        </svg>
                    <div className="backgroundcircle" />
                    <div className="group-desktop">
                      <div className="addtocart-wrapper">
                        <NavLink to={"/shop"}>
                        <button className="addtocart">Add To Cart</button>
                        </NavLink>
                      </div>
                    </div>
                    <div className="title">{title}</div>
                    <div className="price">${price}.0</div>
                    <div className="description">
                      <p className="text-wrapper">{description}</p>
                    </div>
                    <div>
                      <img src={img} alt="" className="imagecircle" />
                    </div>
                  </div>
              </div>
    </>
  );
}

export default Card1;
