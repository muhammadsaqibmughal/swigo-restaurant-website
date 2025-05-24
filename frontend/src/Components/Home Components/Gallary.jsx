import {
  Container,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import Card3 from "./Card3";
import { gallaryData } from "./Data";
function Gallary() {
  return (
    <>
      <div className="Gallary">
        <Container>
          <h1 className="head gHead">From Our Menu</h1>
          <Row>
            {gallaryData.map((val) => {
              return (
                <Col lg={3} md={6} sm={12} xs={12} className="gallaryCard">
                  <Card3 title={val.title} price={val.price} img={val.img}/>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Gallary;
