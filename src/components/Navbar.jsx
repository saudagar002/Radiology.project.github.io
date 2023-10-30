


import React from "react";
import { Link } from "react-router-dom";
import "./Style/Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li>
            <Link to="/Radiology">Pathology</Link>
          </li>
          <li>
            <Link to="/pathology">Radiology</Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img
          src={
            "https://caib.actrec.gov.in/public/uploads/1644227159_723c7643721ac870a9e7.png"
          }
          alt="Logo"
        />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to="/cart" className="nav-link cart">
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={onLogout}
              className="nav-link login-button"
            >
              Logout
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
    
  );
}

export default Navbar;
