 import {Container,Row} from "react-bootstrap";
 import Header from "../Components/MainHeader";
import ContactCard from "../Components/Contact Components/ContentCard";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import SeatReservation from "../Components/Contact Components/SeatReservation";
 function Contact(){
    const data=[
        {
            title:"Location",
            d1:"6952 Shelley St",
            d2:"Melbource",
            ic:<CiLocationOn size={90} color="#7da640" />
        },
        {
            title:"Phone Number",
            d1:"+92-308-915-6503",
            d2:"+92-318-503-7790",
            ic:<FiPhone size={90} color="#7da640" />
        },
        {
            title:"Email Address",
            d1:"info@Webmail.com",
            d2:"info@Example.web.com",
            ic:<AiOutlineMail size={90} color="#7da640" />
        },
        {
            title:"Open & Closing",
            d1:"Mon - Fri: 09:00am",
            d2:"to 07:00pm",
            ic:<FaRegClock size={90} color="#7da640" />
        },
    ]
    return(
        <>
        <Header title={"Contact Us"} img="/images/bg14.jpg"/>
        <Container className="contactMain">
            <Row>
               {
                data.map((val)=>{
                    return(
                        <ContactCard ic={val.ic} title={val.title}d1={val.d1} d2={val.d2} />
                    )
                })
               }
            </Row>
               <SeatReservation/> 
        </Container>
        </>
    )
}

export default Contact;