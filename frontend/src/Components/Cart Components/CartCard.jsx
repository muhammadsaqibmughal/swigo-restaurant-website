import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { Col } from "react-bootstrap";
import "./Cart.css";
import { useState } from "react";

const CartCard = (props) => {
 
  const [count, setCount] = useState(0);
  const title=props.title;
  const price=props.price;
  const img=props.img;
  return (
    <>
      <Col  lg={6} md={12}>
        <div className="cartCard-wrapper">
        <div className="cartImg">
          <img src={img} alt="" style={{borderRadius:"20px"}} width={100} height={100} />
        </div>
        <div className="cartData">
          <div className="cartItemName">
            <h3 style={{ marginLeft: "10px" }}>{title}</h3>
            <button style={{ marginRight: "20px" }}>
              <RxCross2 size={20} color="red" />
            </button>
          </div>
          <div className="cartItemPrice">
            <div className="cartCount">
              <div className="count-wrapper">
                <button onClick={() => setCount(count - 1)}>
                  <FaMinus size={20} color="#7da640" />
                </button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>
                  <IoMdAdd size={20} color="#7da640" />
                </button>
              </div>
              <div className="price">${price}.00</div>
            </div>
          </div>
        </div>
        </div>
      </Col>
    </>
  );
};

export default CartCard;
