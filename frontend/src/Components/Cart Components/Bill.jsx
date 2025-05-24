import { Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
const Bill = () => {
    const [iTotal,setITotal]=useState(0);
    const [iDelivery,setIDelivery]=useState(0);
    const [iGST,setGST]=useState(0);
    const [total,setTotal]=useState(0);
  return (
    <>
      <Col>
        <div className="bill-wrapper">
          <h1 className="bHead">Bill Details</h1>
          <div className="bill-rate">
            <div>
              <span className="Btitle">Item Total</span>
              <span className="ammount">${iTotal}</span>
            </div>
            <div>
              <span className="Btitle">Delivery Charges</span>
              <span className="ammount">${iDelivery}</span>
            </div>
          </div>
          <div className="gst">
            <span className="Btitle">Govt Taxes & Other Charges(20%)</span>
            <span className="ammount">${iGST}</span>
          </div>
          <div className="total">
            <span className="bHead">Total</span>
            <span className="ammount">${total}</span>
          </div>
          <div className="paybnt">
            <button>
              Pay Now <FaArrowRightLong size={30} />
            </button>
          </div>
        </div>
      </Col>
    </>
  );
};
export default Bill;
