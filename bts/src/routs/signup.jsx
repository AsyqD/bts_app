import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css"; // Import your CSS file with button styles
import logo from "../images/logo.png";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: ""
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
        <header className="Signup-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="logo-text">
              Happy <br /> Client
            </span>
          </div>
        </header>
      </Link>
      <div className="signup-container">
        <h1 className="text-signup">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-field"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-field"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="input-field"
            value={formData.companyName}
            onChange={handleChange}
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="signup">Sign Up</button>
        </form>
        <p className="or-text">or</p>
        <Link to="/signin">
          <button className="login-instead">Login Instead</button>
        </Link>
      </div>
    </>
  );
}
