import React from "react";

function RightSection({
  imageURL,
  productname,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
       
        <div className="col-1"></div>
        <div className="col-4 p-5 mt-4">
          <h1 className="fs-2">{productname}</h1>
          <p className="mt-4 mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fas fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay} className="text-decoration-none me-5">
              <img
                src="/media/images/googlePlayBadge.svg"
                className="img-fluid"
              />{" "}
            </a>
            <a href={appStore} className="text-decoration-none">
              <img
                src="/media/images/appStoreBadge.svg"
                className="img-fluid"
              />{" "}
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-5 p-5 ">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
