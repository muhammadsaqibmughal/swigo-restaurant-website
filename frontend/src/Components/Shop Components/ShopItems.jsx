import ShopCard from "./ShopCard";
import "./ShopItems.css"
import { Row } from "react-bootstrap";
import { MenuData } from "../Menu Components/MenuData";
const ShopItems=()=>{
    return(
        <>
       

        
        <div  className="searchResult" >
        <p  className="searchRs">Search Results</p>
        <p className="searchRsCount">Search: 100 items</p>
        </div>
        <Row className="shop-wrapper" >
            {
            MenuData.map((item)=>{
                return(
                         <ShopCard img={item.img} name={item.name} price={item.price} rate={item.rate} dsc={item.dsc}/>
                )
            })
            }
       
        </Row>

        
        </>
    )
}

export default ShopItems;