import {
  Container,
  Carousel,
  CarouselItem,
  Card,
  CardBody,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";

function CustomerFeedBack() {
  return (
    <>
      <div className="customer-feedback">
        <h1 className="head cHead">Our Happy Customers</h1>
        <Container>
          <Carousel>
            <CarouselItem>
              <div className="customer-carousal-wrapper">
                <div className="customer-img">
                  <img
                    src="/images/c1.jpg"
                    width={150}
                    style={{ borderRadius: "150px" }}
                    alt=""
                  />
                </div>
                <div className="cutomer-comment">
                  <p style={{ fontWeight: "700", fontSize: "23px" }}>
                    Jolly Roy
                  </p>
                  <p>Food Tester</p>

                  <blockquote>
                    <BsQuote size={30} />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum unde atque, voluptatem repellat sed maxime veritatis
                    eum explicabo incidunt nemo sequi nam. Voluptatum temporibus
                    inventore deleniti sit reiciendis ipsum cumque!
                  </blockquote>
                </div>
                <div className="customer-star">
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStarHalfAlt color="yellow" size={20} />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="customer-carousal-wrapper">
                <div className="customer-img">
                  <img
                    src="/images/c2.jpg"
                    width={150}
                    style={{ borderRadius: "150px" }}
                    alt=""
                  />
                </div>
                <div className="cutomer-comment">
                  <p style={{ fontWeight: "700", fontSize: "23px" }}>
                    Ronny Joy
                  </p>
                  <p>Assistant</p>

                  <blockquote>
                    <BsQuote size={30} />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum unde atque, voluptatem repellat sed maxime veritatis
                    eum explicabo incidunt nemo sequi nam. Voluptatum temporibus
                    inventore deleniti sit reiciendis ipsum cumque!
                  </blockquote>
                </div>
                <div className="customer-star">
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStar color="yellow" size={20} />
                  <FaStarHalfAlt color="yellow" size={20} />
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default CustomerFeedBack;
