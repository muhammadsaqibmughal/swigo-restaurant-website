// Login.js
import { useState, useEffect } from "react";
import "./Login.css";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { handleLogin,handleSignup } from "../services/API";



const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);



  const [sInData, setSInData] = useState({
    email: "",
    password: "",
  });
  const [sUpData, setSUpData] = useState({
    name: "",
    email: "",
    password: "",
  });


  // onchange function
  const getSignInData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSInData((prev) => {
      return { ...prev, [name]: value };
    });
  };


  const getSignUpData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSUpData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // handle singin data
  const handleSingInData = async (e) => {
    e.preventDefault();
    const result= await handleLogin(sInData);
    alert(result.data.message);
    setSInData(
      {
        email: "",
        password: "",
      }
    )
  };

  const handleSingUpData = async (e) => {
    e.preventDefault();
   const response = await handleSignup(sUpData);
   alert(response.data.message)
    setSUpData(
      {
        name: "",
        email: "",
        password: "",
      }
    )
  };


  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <>
      <div className="login">
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="main"
        >
          <div className="sign-up">
            <form onSubmit={handleSingUpData}>
              <h1 style={{ color: "#6a8d34" }}>Create Account</h1>
              <div className="social-container">
                <NavLink to="" className="social">
                  <FaFacebookF color="#1877f2" />
                </NavLink>
                <NavLink to="" className="social">
                  <IoLogoGoogleplus color="#ea4335" />
                </NavLink>
                <NavLink to="" className="social">
                  <RiLinkedinFill color="#0a66c2" />
                </NavLink>
              </div>
              <p>or use your email for registration</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required=""
                value={sUpData.name}
                onChange={getSignUpData}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={sUpData.email}
                onChange={getSignUpData}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
                value={sUpData.password}
                onChange={getSignUpData}
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="sign-in">
            <form onSubmit={handleSingInData}>
              <h1 style={{ color: "#6a8d34" }}>Sign in</h1>
              <div className="social-container">
                <NavLink to="" className="social">
                  <FaFacebookF color="#1877f2" />
                </NavLink>
                <NavLink to="" className="social">
                  <IoLogoGoogleplus color="#ea4335" />
                </NavLink>
                <NavLink to="" className="social">
                  <RiLinkedinFill color="#0a66c2" />
                </NavLink>
              </div>
              <p>or use your account</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={sInData.email}
                onChange={getSignInData}

              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
                value={sInData.password}
                onChange={getSignInData}
              />
              <a href="#">Forget your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Wellcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button id="signIn" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1>Hello, Friend</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button id="signUp" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
