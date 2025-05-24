import { LuSalad } from "react-icons/lu";
import { FaChampagneGlasses } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { LuDessert } from "react-icons/lu";
import { LiaPepperHotSolid } from "react-icons/lia";
import { PiHamburgerLight } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import Header from "../Components/MainHeader";
import MenuCard from "../Components/Menu Components/MenuCard";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MenuData } from "../Components/Menu Components/MenuData";
function Menu() {
  return (
    <>
      <Header title={"Menu"} img="/images/bg18.jpg" />
      <Container className="Menu">
        <Row>
          <Col className="Icon_wrapper">
            <NavLink className="menuIcon">
              <IoFastFoodOutline size={30} />
              <h5>ALL</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <FaChampagneGlasses size={30} />
              <h5>COLD DRINKS</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <CiPizza size={30} />
              <h5>PIZZA</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <LuSalad size={30} />
              <h5>SALAD</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <LuDessert size={30} />
              <h5>SWEETS</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <LiaPepperHotSolid size={30} />
              <h5>SPICY</h5>
            </NavLink>
            <NavLink className="menuIcon">
              <PiHamburgerLight size={30} />
              <h5>BURGER</h5>
            </NavLink>
          </Col>
        </Row>
        <Row className="MenuRow">
        {
          MenuData.map((val,i)=>{
            return(
              <MenuCard name={val.name} img={val.img} price={val.price} rate={val.rate} dsc={val.dsc}/>
            )
          })
         
        }
       
        </Row>
      </Container>
    </>
  );
}

export default Menu;
