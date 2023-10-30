import React, { useState } from "react";
import "./Style/Signup.css"; // Create a CSS file for styling

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [signupReason, setSignupReason] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Re-enter Password:", reenterPassword);
    console.log("Signup Reason:", signupReason);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-container">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Surname:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Reason to Sign Up:</label>
          <textarea
            rows="4"
            value={signupReason}
            onChange={(e) => setSignupReason(e.target.value)}
          ></textarea>
        </div>
        <div className="button-container">
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
      <div className="login-reset-container">
        <a href="/login">Login</a>
        <span className="separator">|</span>
        <a href="/reset-password">Reset Password</a>
      </div>
    </div>
  );
}

export default Signup;
