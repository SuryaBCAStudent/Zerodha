import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container ">
      <div
        className="row mt-4 "
        style={{ fontsize: "1.2em", lineHeight: "1.8em" }}
      >
        <div className="col-2 "></div>
        <div className="col-4 mt-5 p-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Team"
            className="img-fluid mb-4"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" fs-5">Nithin Kamath</h4>
          <h5 className="fs-6 text-muted">Founder & CEO</h5>
        </div>

        <div className="col-4 text-muted ">
          <h1 className="fs-3 " style={{ color: "#424242" }}>
            People
          </h1>
          <p className="mt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <Link to="/" className="text-decoration-none">
              Homepage
            </Link>{" "}
            /{" "}
            <a href="/tradingqna" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/twitter" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
        <div className="col-2 "></div>
      </div>
    </div>
  );
}

export default Team;
