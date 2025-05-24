
import { Col } from "react-bootstrap";
function ContactCard(props) {
    const ic=props.ic;
    const title=props.title;
    const d1=props.d1;
    const d2=props.d2;
  return (
    <>
          <Col lg={3} md={6} sm={12} className="contactCard-wrapper    ">
            <div className="contactCard">
              <div className="contactIcon">
                {ic}
              </div>
              <div className="contactDetail">
                <h3 >{title}</h3>
                <p>{d1}<br/>{d2}</p>
              </div>
            </div>
          </Col>
    </>
  );
}
export default ContactCard;
