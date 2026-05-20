import React from 'react';
import ShowIfLoggedOut from './middleware';
import { Link} from "react-router-dom";
function OpenAccount() {
  return (

    <div className="container p-5 mb-5">
      <ShowIfLoggedOut>
        <div className= "row text-center">
            <div className="col">
                <h1 className="mt-4">Open a Zerodha account </h1>
                <p className="mb-4">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup"> <button className="btn btn-primary btn-md fs-5">Sign up Now</button></Link>
            </div>
        </div>
         </ShowIfLoggedOut>
    </div>
   
    
  );
}

export default OpenAccount;