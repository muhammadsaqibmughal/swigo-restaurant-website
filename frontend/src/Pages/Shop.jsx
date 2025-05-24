import Header from "../Components/MainHeader";
import { Container,Row } from "react-bootstrap";
import ShopItems from "../Components/Shop Components/ShopItems";
import ShopFilter from "../Components/Shop Components/ShopFilter";
function Shop() {
  return (
    <>
      <Header title={"Shop"} img="/images/bg20.jpg" />
      <div style={{ backgroundColor: "#F4FDE7" }}>
        <Container className="shop">
          <div className="ShopSearch">
            <input type="search" placeholder="Type here" />
            <button>Search</button>
          </div>
            
            <ShopFilter />
            <ShopItems />
            
        </Container>
      </div>
    </>
  );
}

export default Shop;
