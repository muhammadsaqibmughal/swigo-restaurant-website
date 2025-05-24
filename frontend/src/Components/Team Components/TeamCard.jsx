import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function TeamCard() {

  return (
    <>
      <div className="teamContainer">
        <div className="teamImg">
          <img
            src="/images/shef1.jpg"
            alt=""
            width={"300px"}
            height={"450"}
            className="img"
          />
        </div>
        <div className="teamData-wrapper">
          <div className="teamData">
            <h4>Sarah Albert</h4>
            <p>Seenior Chef</p>
          </div>
          <div className="teamSocial">
            <IoShareSocialOutline size={40} color="white" />
          </div>
        </div>
        <div className="overlyTop"></div>
        <div className="socialIcon"   >
          <div className="teamSocial1"  style={{backgroundColor:"#4867AA"}}>
            <FaFacebookF size={30} color="white" />
          </div>

          <div className="teamSocial1"  style={{backgroundColor:"#3A9DF9"}}>
            <FaLinkedinIn size={30} color="white" />
          </div>
          <div className="teamSocial1" style={{backgroundColor:"#D74141"}}>
            <FaInstagram size={30} color="white" />
          </div>
          <div className="teamSocial1" style={{backgroundColor:"#81B2DF"}}>
            <FaTwitter size={30} color="white"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
