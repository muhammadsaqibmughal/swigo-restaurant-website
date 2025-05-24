import Header from "../Components/MainHeader";
import CartCard from "../Components/Cart Components/CartCard";
import { Container,Row,Col } from "react-bootstrap";
import ShopCard from "../Components/Shop Components/ShopCard";
import Bill from "../Components/Cart Components/Bill";
function Cart()
{
    const relatedItems=[
        {
            "id": "ribs-brisket-and-burnt-ends",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Joe's KC BBQ",
            "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
            "price": 110.99,
            "rate": 4,
            "country": "Kansas City, KS"
          },
          {
            "id": "005-kings-carolina-oink-sampler",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Kings BBQ",
            "dsc": "Carolina BBQ Oink Sampler",
            "price": 89,
            "rate": 4,
            "country": "Kinston, NC"
          },
          {
            "id": "texas-monthlys-1-bbq-brisket",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Snow's BBQ",
            "dsc": "Texas Monthly's #1 BBQ Brisket",
            "price": 199,
            "rate": 4,
            "country": "Lexington, TX"
          }]

          const cartitemData=[
            {
              title:"Double Patty Burger",
              price:10,
              img:"/images/26.jpg"
            },
            {
              title:"Macroni",
              price:15,
              img:"/images/11.jpg"
            },
            {
              title:"Tower Burger",
              price:20,
              img:"/images/13.jpg"
            },
          ]
    return(
        <>
        <Header title={"Cart"} img="/images/bg15.jpg"/>
        <Container>
            <Row className="cart-wrapper1">
                {
                    cartitemData.map((item)=>{
                        return(
                            <CartCard title={item.title} price={item.price} img={item.img}/>
                        )
                    })
                }
            
            </Row>
            <Row className="cart-wrapper">
                <Bill/>
            </Row>
            <Row className="cart-wrapper">
            <h1 className="relatedItms">Related Items</h1>
            {
                relatedItems.map((item)=>{
                    return(
                        <ShopCard img={item.img} name={item.name} price={item.price} rate={item.rate} dsc={item.dsc}/>
                    )
                })
            }
            </Row>
        </Container>

        </>
    )
}

export default Cart;