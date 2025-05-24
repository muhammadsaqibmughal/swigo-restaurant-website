import { Col, Row } from "react-bootstrap";
import { handleReserve2 } from "../../services/API";
import { useState } from "react";

function SeatReservation() {
  const [reserve,setReserve]=useState({
    name:"",
    phone:"",
    email:"",
    persons:"",
    message:"",

  })

  //handle change
  const handleChange=(e)=>{
    setReserve({...reserve,[e.target.name]:e.target.value});
  }

 

  //handle submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(reserve);
    if(reserve.name=="" || reserve.email=="" || reserve.phone=="" || reserve.persons=="")
    {
      alert("Complete Table Reservation")
    }
    else
    {
    
    handleReserve2(reserve);
    alert(`Mr/Mrs. ${reserve.name} Your table is Reserved Successfuly for Date :${reserve.date}`);
    setReserve({
      name:"",
      phone:"",
      email:"",
      persons:"",
      message:"",
  
    })
    }
  

  }
  return (
    <>
      <div className="contactReserve">
        <h1 className="head">Reservation</h1>
        <form onSubmit={handleSubmit}>
        <Row>
          <Col lg={6} md={12} className="contact-wrapper">
            <div className="seatWrapper">
              <label htmlFor="">Your Name</label>
              <br />
              <input type="text" name="name" value={reserve.name} onChange={handleChange} id="" placeholder="John Doe" />
            </div>
          </Col>
          <Col lg={6} md={12} className="contact-wrapper">
            <div className="seatWrapper">
              <label htmlFor="">Your Email</label>
              <br />
              <input type="email" name="email" value={reserve.email} onChange={handleChange}  id="" placeholder="example@gmail.com" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="contact-wrapper">
            <div className="seatWrapper">
              <label htmlFor="">Your Number</label>
              <br />
              <input type="text" name="phone" value={reserve.phone} onChange={handleChange}  id="" placeholder="3089156503" />
            </div>
          </Col>
          <Col lg={6} md={12} className="contact-wrapper">
            <div className="seatWrapper">
              <label htmlFor="">Members</label>
              <br />
              <input type="text"  name="persons" value={reserve.persons} onChange={handleChange}  id="" placeholder="1 Person" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="contact-wrapper" >
            <div className="seatWrapper">
              <label htmlFor="">Message</label>
              <p></p>
              <input type="text" name="message" value={reserve.message} onChange={handleChange}  id="" placeholder="Hi, do you Have a moment to talk About!" style={{width:"70vw"}}/>
            </div>
          </Col>
        </Row>
        <div className="contactBtn">
            <button >Book a Table</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default SeatReservation;
