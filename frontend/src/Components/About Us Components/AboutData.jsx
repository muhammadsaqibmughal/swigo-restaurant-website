import { Container,Row,Col } from "react-bootstrap";
import Card4 from "./Card4";
import {AData } from "../Home Components/Data";
function AboutData(){
    return(
        <>
        <div className="aboutD">
            <Container>
                <Row>
                    <Col className="about-text">
                    <h1 className="head">We Invite you to Visit Our Restaurant</h1>
                <p style={{width:"70%",textAlign:"center",marginTop:"1vw"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="res-video">
                    <iframe width="90%" height="450" src="https://www.youtube.com/embed/_dui6BUmMBg?si=LRoRtQiRFpVlh7wp&amp;start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
                <Row>
                    <h1 className="head" style={{marginBottom:"3vw"}}>What We Do</h1>
                {
                    
                    AData.map((val) => {
                        return (
                          <Col lg={3} md={6} sm={12} xs={12} className="aboutCard">
                            <Card4
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
    )
}

export default AboutData;