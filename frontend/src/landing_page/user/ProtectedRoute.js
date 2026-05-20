import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {

    axios.get(
      "https://zerodha-uc23.onrender.com/verify",
      { withCredentials: true }
    )
    .then((res) => {

      if (res.data.status) {
        setIsAuth(true);
      }

      setLoading(false);

    })
    .catch(() => {
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return isAuth
    ? children
    : <Navigate to="/login" />;
};

export default ProtectedRoute;