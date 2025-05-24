import { MenuData } from "./Data";
import { Col, Container,Row} from "react-bootstrap";
import Card1 from "./Card1";
function MainMenu() {
  return (
    <>
      <Container  className="MainMenu">
        <Row>
      <h1 className="MenuhHead head">Special Menu</h1>
      {MenuData.map((val) => {
        return(
            <Col lg={4} md={6} sm={12} className="mainMenu-card">
        <Card1 title={val.title} img={val.img} description={val.description} price={val.price} />
        </Col>
        ) 
      })}
      
      </Row>
      
      </Container>
    </>
  );
}

export default MainMenu;
