import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Submitted");
      const { data } = await axios.post(
        "https://zerodha-uc23.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      
      const { success, message } = data;
      
      if (success) {
        // 🎯 FIX: LocalStorage me token flag set karo taaki Navbar ko pata chal sake
        localStorage.setItem("token", "true");

        handleSuccess(message);
        
        setTimeout(() => {
          navigate("/");
          window.location.reload(); // 🔄 FIX: Isse page ek baar reload hoga aur Navbar automatic update ho jayega
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="authenticate">
      <div className="form_container">
        <h2>Signup Account</h2>
        <form onSubmit={handleSubmit}> {/* Sahi practice: onSubmit yahan lagao */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>

          {/* Sahi practice: button type="submit" rakho */}
          <button type="submit"> 
            Submit
          </button>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;