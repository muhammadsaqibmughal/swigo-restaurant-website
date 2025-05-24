
import CarosalMain from "../Components/Home Components/CarosalMain";
import MainMenu from "../Components/Home Components/MainMenu";
import OurSevices from "../Components/Home Components/OurServices";
import Gallary from "../Components/Home Components/Gallary";
import Reservation from "../Components/Home Components/Reservation";
import CustomerFeedBack from "../Components/Home Components/CustomerFeedBack";
import NewsLetter from "../Components/Home Components/NewLetter";

function Home()
{
    return(
        <>
          <CarosalMain/>
          <MainMenu/>
         <OurSevices/>
         <Gallary/>
         <Reservation/>
         <CustomerFeedBack/>
         <NewsLetter/>
        </>
    )
}

export default Home;