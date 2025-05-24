import { Row,Col,Navbar, NavbarBrand,Nav, NavbarToggle, NavbarCollapse, Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

function MainNav() {

    return (
        <Container fluid >
                <Row className=''>
                    <Col className="p-0" style={{marginBottom:"80px"}}>
                        <Navbar  fixed='top' className="px-4 d-flex justify-content-between " bg="white" expand="lg" >
                            <NavbarBrand className=" " >
                                <img src="/images/logo2.png" alt="" />
                              
                            </NavbarBrand>
                            <NavbarToggle aria-controls="main-navbar"/>
                            <NavbarCollapse id="main-navbar">

                            
                            <Nav className=" d-flex justify-content-end  w-100">
                                <NavLink  className="nav" to="/">
                                    Home
                                </NavLink>
                                <NavLink className="nav"  to="/about">
                                    About Us
                                </NavLink>
                                <NavLink className="nav"  to="/shop">
                                    Shop
                                </NavLink>
                                <NavLink className="nav"  to="/menu">
                                    Menu
                                </NavLink>
                                <NavLink className="nav"  to="/contact">
                                    Contact Us
                                </NavLink>

                                <NavLink  className="nav d-block d-lg-none" to="/user">
                                    Login
                                </NavLink>
                                <NavLink className="nav d-block d-lg-none"  to="/cart">
                                    Cart
                                </NavLink>
                               
                               <NavLink className="navIcon d-none d-lg-block" style={{marginLeft:"50px"}} to="/user">
                               <FaRegUser size={30} color="white" />
                                </NavLink>
                                <NavLink className="navIcon d-none d-lg-block" to="/cart">
                                <IoBagHandleOutline  size={30} color="white" />
                                </NavLink>
                            </Nav>
                            </NavbarCollapse>
                        </Navbar>
                    </Col>
                </Row>
        </Container>
    );

}

export default MainNav;