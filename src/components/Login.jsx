import React, { useState } from "react";
import "./Style/Login.css";

const hardcodedCredentials = {
  email: "1",
  password: "123",
};
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    if (
      email === hardcodedCredentials.email &&
      password === hardcodedCredentials.password
    ) {
      onLogin();

      window.location.href = "/navbar";
    } else {
      console.log("Login failed. Invalid credentials.");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
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
        <div className="button-container">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <div className="signup-reset-container">
        <a href="/signup">Sign Up</a>
        <span className="separator">|</span>
        <a href="/reset-password">Reset Password</a>
      </div>
    </div>
  );
}

export default Login;
