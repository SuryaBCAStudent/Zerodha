import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row  mt-5 p-5 text-center border-top ">
        <div className="col-7 p-4">
           <a href="#" className="text-decoration-none">
             <h3 className="fs-5">Brokerage calculator</h3>
           </a>
           <ul className="text-muted " style={{textAlign: "left", lineHeight: "2" , fontSize: "14px"}}>
            <li>
              <p className="mt-4">Call & Trade and RMS auto-square-off:Additional charges of ₹ 50 GST per executed order. </p>
            </li>
              <li>
                <p>DP charges: ₹ 13.5 per executed order for equity delivery and ₹ 0 for intraday and F&O trades.</p>
              </li>
              <li>
                <p>STT: 0.1% on equity delivery and 0.025% on intraday and F&O trades.</p>
              </li>
              <li>
                <p>GST: 18% on brokerage and call & trade charges.</p>
              </li>
              <li>
                <p>SEBI turnover fees: 0.0002% on intraday and F&O trades.</p>
              </li>
              <li>
                <p>Stamp duty: 0.003% on intraday and F&O trades.</p>
              </li>
              <li>
                <p>Other charges: ₹ 0.5 per executed order for equity delivery and ₹ 0.1 per executed order for intraday and F&O trades.</p>
              </li>
           </ul>
        </div>
        <div className="col-4 p-4">
           <a href="#" className="text-decoration-none">
             <h3 className="fs-5">List of charges</h3>
           </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
