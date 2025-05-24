
import "./App.css"
import { Routes,Route } from "react-router-dom"
import Home  from "./Pages/Home"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Contact from "./Pages/Contact"
import Menu from "./Pages/Menu"
import ProductDetail from "./Pages/ProductDetail"
import Shop from "./Pages/Shop"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./Components/Nav";
import About from "./Pages/AboutUs"
import Footer from "./Components/Footer"
import Login from "./Pages/Login"
function App() {


  return (
    <>
      <MainNav/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/product" element={<ProductDetail/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/user" element={<Login/>}/>
            <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
