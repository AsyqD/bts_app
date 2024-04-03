import React from "react";
import "../styles/SignIn.css"; // Import your CSS file with button styles

export default function SignInPage() {
  return (
    <div className="signin-container">
      <input type="text" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="login">Login</button>
      <p className="or-text">or</p>
      <button className="create-account">Create an Account</button>
    </div>
  );
}
