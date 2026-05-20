import React from "react";


const getJwtTokenFromCookie = () => {
  const name = "token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length); // Yeh actual JWT token return karega
    }
  }
  return null; // Agar token nahi mila
};

const ShowIfLoggedOut = ({ children }) => {
  // 🎯 Direct JWT Token check karo browser ki cookie se
  const jwtToken = getJwtTokenFromCookie();

  // Agar JWT Token exist karta hai (matlab user login HAI), toh andar ki cheez chhupa do
  if (jwtToken) {
    return null;
  }

  // Agar token nahi hai (user logged out hai), toh button ko render hone do
  return <>{children}</>;
};

export default ShowIfLoggedOut;