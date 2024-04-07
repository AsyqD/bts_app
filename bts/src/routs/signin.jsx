import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/SignIn.css"; // Import your CSS file with button styles
import logo from "../images/logo.png";

export default function SignInPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the SignIn component
    navigate("/signin");
  };
  return (
    <>
      <Link to="/">
        <header className="Signin-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="logo-text">
              Happy <br /> Client
            </span>
          </div>
          <div className="buttons">
            <button className="sign-up">Sign up</button>
            <button className="sign-in" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
        </header>
      </Link>
      <div className="signin-container">
        <h1 className="text-login">Login</h1>
        <input type="text" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login">Login</button>
        <p className="or-text">or</p>
        <button className="create-account">Create an Account</button>
      </div>
    </>
  );
}
