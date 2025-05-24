import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { useState } from "react";
import { handleReserve } from "../../services/API";

function Reservation() {
  const [reserve,setReserve]=useState({
    name:"",
    phone:"",
    email:"",
    persons:"",
    date:"",
    time:"",

  })

  //handle change
  const handleChange=(e)=>{
    setReserve({...reserve,[e.target.name]:e.target.value});
  }

 

  //handle submit
  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(reserve);
    if(reserve.name=="" || reserve.email=="" || reserve.phone=="" || reserve.date=="" || reserve.time=="" || reserve.persons=="")
    // if(false)
    {
      alert("Complete Table Reservation")
    }
    else
    {
    
    const result=await handleReserve(reserve);
    console.log(result);
    alert(`Mr/Mrs. ${reserve.name} Your table is Reserved Successfuly for Date :${reserve.date}`);
    setReserve({
      name:"",
      phone:"",
      email:"",
      persons:"",
      date:"",
      time:"",
  
    })
    }
  

  }
  return (
    <>
      <div className="reservation">
        <div className="reservation-overlay">
          <Container>
            <h1 className="head rHead">Reservation</h1>
            <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <FaRegUser size={30} color="white" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    value={reserve.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="inputDesign"
                  />
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <FiPhoneCall size={30} color="white" />
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={reserve.phone}
                    onChange={handleChange}
                    id=""
                    placeholder="Phone Number"
                    className="inputDesign"
                  />
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <MdOutlineMail size={30} color="white" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={reserve.email}
                    onChange={handleChange}
                    id=""
                    placeholder="Your Email"
                    className="inputDesign"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <GoPeople size={30} color="white" />
                  </label>
                  <select
                    name="persons"
                    value={reserve.persons}
                    onChange={handleChange}
                    id=""
                    className="inputDesign"
                    style={{ marginTop: "0.5vw" }}
                  >
                    <option value="null">Number of People</option>
                    <option value="1">Mumber 1</option>
                    <option value="2">Mumber 2</option>
                    <option value="3">Mumber 3</option>
                    <option value="4">Mumber 4</option>
                    <option value="5">Mumber 5</option>
                  </select>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <SlCalender size={30} color="white" />
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={reserve.date}
                    onChange={handleChange}
                    id=""
                    placeholder=" Select Date"
                    className="inputDesign"
                  />
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="inputWrapper">
                  <label>
                    <IoMdTime size={30} color="white" />
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={reserve.time}
                    onChange={handleChange}
                    id=""
                    placeholder=" Select Date"
                    className="inputDesign"
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col lg={4} md={6} sm={12}>
                <div>
                  <input type="submit" className="reservBtn" name="" id="" />
                </div>
              </Col>
            </Row>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Reservation;
