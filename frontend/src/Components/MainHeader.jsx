import { Container,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Header(props)
{
    const title=props.title;
    const img=props.img;
    const bImg={
        backgroundImage:`url(${img})`
    }
    return(
        <>
        <div className="MainHeader" style={bImg}>
            <div className="headerOverlay">

            
            <Container>
                <Row>
                    <Col className="mHeader">
                        <h1 className="head mHead">{title}</h1>
                        <div className="navLoc">
                        <p>
                            <NavLink to={"/"} style={{textDecoration:"none",color:"white"}}>Home </NavLink>
                             <FaAngleRight />
                             &nbsp;{title}
                        </p>
                            
                        </div>
                       
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        </>
    )
}

export default Header;