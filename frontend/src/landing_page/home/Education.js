import React from 'react';

function Education() {
  return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src="/media/images/education.svg" alt="Education" className="img-fluid" />
            </div>
            <div className="col-6 p-5">
              <h1 className="mb-5 fs-2">Free and open market education</h1>

                  <p>That's why 1.3+ crores customers trust Zerodha with 3.5+lakh crores rupees worth of equity investments.</p>
                  <a href='#' style={{ textDecoration: 'none' }}>Varsity <i className="fas fa-long-arrow-right" aria-hidden="true"></i></a>

                  <p className="mt-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                  <a href='#' style={{ textDecoration: 'none' }}>TradingQ&A <i className="fas fa-long-arrow-right" aria-hidden="true"></i></a>

            
          
            </div>
            
        </div>
    </div>
  );
}

export default Education;