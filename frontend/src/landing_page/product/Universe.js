import React from "react";
import { Link} from "react-router-dom";
import ShowIfLoggedOut from '../middleware';
function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 text-muted">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col  mt-5">
          <img
            src="media\images\smallcaseLogo.png"
            alt="Smallcase Logo"
            style={{ width: "50%" }}
          ></img>
        </div>
        <div className="col-4  mt-5">
          <img
            src="media\images\streakLogo.png"
            alt="Streak Logo"
            style={{ width: "50%" }}
          ></img>
        </div>
        <div className="col-4  mt-5">
          <img
            src="media\images\sensibullLogo.svg"
            alt="Panther Logo"
            style={{ width: "50%" }}
          ></img>
        </div>
      </div>

      <div className="row text-center  text-muted">
        <div className="col  ">
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 ">
          <p>Algo and Strategy platform</p>
        </div>
        <div className="col-4  ">
          <p>Options trading platform</p>
        </div>
      </div>

      <div className="row text-center mt-5 ">
        <div className="col-4  mt-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            alt="Zerodha Logo"
            style={{ width: "50%" }}
          ></img>
          
        </div>
        <div className="col-4  mt-5">
          <img
            src="media\images\goldenpiLogo.png"
            alt="GoldenPi Logo"
            style={{ width: "50%" }}
          ></img>
          
        </div>
        <div className="col-4  mt-5">
          <img
            src="media\images\dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "30%" }}
          ></img>
         
        </div>

        <div className="row text-center  text-muted">
        <div className="col p-1  ">
          <p>Asset management</p>
        </div>
        <div className="col-4 p-1">
          <p>Bond transferring platform </p>
        </div>
        <div className="col-4 p-1">
          <p>Insurance</p>
        </div>
      </div>

       <ShowIfLoggedOut>
        <div className="col-12 text-center mt-5 mb-5">
          <Link to="/signup"> 
          <button className="btn btn-primary fs-5" style={{ width: "200px" }}>
            Signup Now
          </button></Link>
         
        </div>
        </ShowIfLoggedOut>
      </div>
    </div>
  );
}

export default Universe;
