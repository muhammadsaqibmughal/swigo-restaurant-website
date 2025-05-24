import { Container, Row, Col } from "react-bootstrap";
import Card2 from "./Card2";

import { ServicesData } from "./Data";
function OurSevices() {
  return (
    <>
      <div className="ourServices">
        <Container>
          <h1 className="ServiceHead head">Quality Services</h1>
          <Row>
            {ServicesData.map((val) => {
              return (
                <Col lg={3} md={6} sm={12} xs={12} className="servicesCard">
                  <Card2
                    title={val.title}
                    description={val.description}
                    img={val.img}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurSevices;
