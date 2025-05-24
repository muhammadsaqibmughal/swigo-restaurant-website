import { Container } from "react-bootstrap";
import { useState } from "react";
function NewsLetter() {
  const [email, setEmail] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    handleEmail();
    setEmail("");
  }

  const handleEmail=()=>{
      if(email!="")
      {
        alert("Thank You! You Successfully Subscribe to our NEWSLETTER");
      }
  }

  return (
    <>
      <div className="newsLetter">
        <h1 className="head newsHead">Newsletter</h1>
        <Container>
          <div className="news-wrapper">
            <p
              style={{
                fontSize: "1.6vw",
                textAlign: "center",
                padding: "2vw",
                width: "50vw",
                color: "white",
              }}
            >
              Subscribe to our newsletter in order not to miss new arrivals
              promotions and discounts of our store
            </p>
            <form onSubmit={handleSubmit}>
              <div className="emailWrapper">
                <input
                  type="email"
                  className="inputDesign"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button>Subscribe</button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NewsLetter;
