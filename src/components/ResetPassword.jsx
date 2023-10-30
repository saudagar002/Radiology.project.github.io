import React, { useState } from "react";
import "./Style/ResetPassword.css"; // Create a CSS file for styling

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log("Email:", email);
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </form>
      <div className="login-signup-container">
        <a href="/login">Login</a>
        <span className="separator">|</span>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default ResetPassword;
