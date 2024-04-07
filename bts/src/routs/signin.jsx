import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css"; // Import your CSS file with button styles
import logo from "../images/logo.png";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can add your logic to submit data
    console.log(formData);
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
        </header>
      </Link>
      <div className="signin-container">
        <h1 className="text-login">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="login">Login</button>
        </form>
        <p className="or-text">or</p>
        <Link to="/signup">
          <button className="create-account">Create Account</button>
        </Link>
      </div>
    </>
  );
}
