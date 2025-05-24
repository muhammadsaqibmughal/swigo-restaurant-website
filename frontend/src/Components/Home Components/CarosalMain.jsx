import React from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselCaption, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const CarosalMain = () => {
  return (
    <>
      <Row>
        <Col>
          <Carousel fade className=" w-100 custom-carousel"
          //  style={{  margin: 'auto', position: 'relative' }}
           >
            <CarouselItem className='' interval={1500}>
              <img src="/images/slider6.avif" alt="" className="d-block  w-100 "  />
              <CarouselCaption className="custom-caption">
                <h1 className="title">Delicious Eats And <span className='typing-text'>Tasty Drinks</span></h1>
                <p style={{fontSize:"1.6vw"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sapiente ab impedit in necessitatibus amet nobis nostrum officia, ratione libero pariatur illo consequatur sit vel!</p>
                <NavLink to="/shop" className="shopBtn">Shop Now</NavLink>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem interval={1500}>
              <img src="/images/slider5.avif" alt=""  className="d-block w-100 "  />
              <CarouselCaption className="custom-caption">
                <h1 className="title">Choosing The Best <span className='typing-text'>Food Quality</span></h1>
                <p style={{fontSize:"1.6vw"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sapiente ab impedit in necessitatibus amet nobis nostrum officia, ratione libero pariatur illo consequatur sit vel!</p>
                <NavLink to="/shop" className="shopBtn">Shop Now</NavLink>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem interval={1500}>
              <img src="/images/slider4.avif" alt="" className="d-block w-100 "  />
              <CarouselCaption className="custom-caption">
                <h1 className="title">Where Food Meets <span className='typing-text'>Best Passion</span></h1>
                <p style={{fontSize:"1.6vw"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sapiente ab impedit in necessitatibus amet nobis nostrum officia, ratione libero pariatur illo consequatur sit vel!</p>
                <NavLink to="/shop" className="shopBtn">Shop Now</NavLink>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default CarosalMain;
