import { Container,Row,Col } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer()
{
    return(
        <>
        <div className="footer">
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <div className="ftext-Wrapper">
                        <h3 className="fTitle">CONTACT</h3>
                        <div className="contact-detail">
                        <CiLocationOn size={30} color="#7da640" style={{marginRight:"10px",marginTop:"6px"}}/>
                            <p >1247/Plot No. 39, 15th Phase,<br/> Colony, Kkatpally, Hyderabad </p>
                        
                        
                        </div>

                        <div className="contact-detail">
                        <FiPhone size={30} color="#7da640" style={{marginRight:"10px",marginTop:"6px"}}/>
                        <p>+92 308-915-6503 <br />+92 318-503-7790</p>
                        </div>

                        <div className="contact-detail">
                        <AiOutlineMail size={30} color="#7da640" style={{marginRight:"10px",marginTop:"6px"}}/>
                        <p>info@example.com<br/>info@example.com</p>
                        </div>

                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="ftext-Wrapper">
                        <h3 className="fTitle">OUR LINKS</h3>
                        <div className="link-detail">
                        <NavLink to={"/"} className="link">
                            <p>Home</p>
                        </NavLink>
                        <NavLink to={"/about"} className="link">
                            <p>About Us</p>
                        </NavLink>
                        <NavLink to={"/shop"} className="link">
                            <p>Services</p>
                        </NavLink>
                        <NavLink to={"/"} className="link">
                            <p>Team</p>
                        </NavLink>
                        <NavLink to={"/"} className="link">
                            <p>Blog</p>
                        </NavLink>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="ftext-Wrapper">
                        <h3 className="fTitle">OUR SERVICES</h3>
                        <div className="link-detail">
                        <NavLink to={"/shop"} className="link">
                            <p>Shop</p>
                        </NavLink>
                        <NavLink to={"/"} className="link">
                            <p>Seat Reservation</p>
                        </NavLink>
                        <NavLink to={"/shop"} className="link">
                            <p>Fast Delivery</p>
                        </NavLink>
                        <NavLink to={"/shop"} className="link">
                            <p>Strategy & Research</p>
                        </NavLink>
                        <NavLink to={"/menu"} className="link">
                            <p>Our Menu</p>
                        </NavLink>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="ftext-Wrapper">
                        <h3 className="fTitle">HELP CENTER</h3>
                        <div className="link-detail">
                        <NavLink to={"/contact"} className="link">
                            <p>FAQ</p>
                        </NavLink>
                        <NavLink to={"/shop"} className="link">
                            <p>Shop</p>
                        </NavLink>
                        <NavLink to={"/shop"} className="link">
                            <p>Catergory Filter</p>
                        </NavLink>
                        <NavLink to={"/"} className="link">
                            <p>Testimonials</p>
                        </NavLink>
                        <NavLink to={"/contact"} className="link">
                            <p>Contact Us</p>
                        </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row >
                <Col className="copyRights">
                <p style={{display:"inline-block"}}> Copyright <FaRegCopyright /> 2023 All rights reserved.</p>
                <p style={{color:"#7da640"}}>Developed by MS MUGHAL</p>
                </Col>
            </Row>
        </Container>
        </div>

        </>
    )
}

export default Footer;