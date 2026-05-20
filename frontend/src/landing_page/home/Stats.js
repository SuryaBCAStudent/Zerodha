import React from 'react';

function Stats() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-3"> 
                   <h1 className="fs-2 mb-5">Trust with Confidence</h1>

                   <h2 className="fs-4">Customer -first always</h2>
                   <p className="text-muted">That's why 1.3+ crores customers trust Zerodha with 3.5+lakh crores rupees worth of equity investments.</p>
                   <h2 className="fs-4">No spam or gimmicks</h2>
                   <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                   <h2 className="fs-4">The Zerodha universe</h2>
                   <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <h2 className="fs-4">Do better with money</h2>
                   <p className="text-muted">Make your money work harder for you with our innovative financial solutions.</p>
                </div>
                <div className="col-6 p-5 ">
                    <img src='media/images/ecosystem.png' style={{ width: '75%' }} alt="Ecosystem"  />
                    <div className="row mt-4"> 
                        <div className="col-6">
                            <a href='#' style={{ textDecoration: 'none' }}>Explore our products <i className="fas fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-6">
                            <a href='#' style={{ textDecoration: 'none' }}>Try Kite demo <i className="fas fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;