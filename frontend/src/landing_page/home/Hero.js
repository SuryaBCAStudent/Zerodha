import React from 'react';
import ShowIfLoggedOut from '../middleware';
import { Link} from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-3">
      <div className= "row text-center">
            <div className="col">
                <img src='media/images/homeHero.png' alt="Home Hero" className="img-fluid mb-5" />
                <ShowIfLoggedOut>
                <h1 className="mt-5">Invest in everything </h1>
                <p>Online platform to invest in stocks, bonds, mutual funds, and more</p>
               <Link to="/signup"><button className="btn btn-primary btn-md fs-5">Signup Now</button></Link> 
               </ShowIfLoggedOut>
            </div>
        </div>
        
        
    </div>
  );
}

export default Hero;