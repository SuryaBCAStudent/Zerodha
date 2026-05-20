import React from 'react';

function Awards() {
  return (
    <div className="container">
        <div className="row ">
            <div className="col-6 p-5">
                <img src='media/images/largestBroker.svg' alt='Awards' className="img-fluid"/>
            </div>
            <div className="col-6 p-5 mt-3">
              <h1 className="fs-2">Largest stock broker in India</h1>
              <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in.</p>
              <div className="row ">
                <div className="col-6 mb-3 ">
                    <ul>
                        <li> Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <ul>
                        <li> Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                 </div>
              </div>
                   
              <img src='media/images/pressLogos.png' alt='Press Logos' className="img-fluid"/>
            </div>
        </div>
    </div>
  );
}

export default Awards;