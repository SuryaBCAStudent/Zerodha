/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Logout API call karne ke liye

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Page load hote hi check karo ki kya user logged in hai
  useEffect(() => {
    // Aap login/signup ke waqt localStorage mein 'isLoggedIn' ya 'token' set kar sakte hain
    const userToken = localStorage.getItem("token") || document.cookie.includes("token");
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Logout handle karne ke liye function
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      
      // LocalStorage se token hatao aur state update karo
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      
      // Logout ke baad user ko home ya login page par bhej do
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              
              {/* 🎯 CONDITIONAL RENDERING: Agar logged in hai to Logout dikhao, nahi to Signup */}
              {isLoggedIn ? (
                <li className="nav-item">
                  <button 
                    className="nav-link btn btn-link active text-danger fw-bold" 
                    onClick={handleLogout}
                    style={{ border: "none", background: "none", textDecoration: "none" }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>  
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;