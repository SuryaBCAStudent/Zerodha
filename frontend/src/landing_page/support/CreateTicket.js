import React from 'react';

function Hero() {
  
  const ticketTopics = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Account Opening Status",
        "Account Opening Issues",
        "Account Opening Documents",
        "Account Opening Charges",
        "NRI Account Opening"
      ]
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-circle",
      links: [
        "Login Credentials",
        "Your Profile & Details",
        "Nominee Registration",
        "Re-KYC & Modification",
        "Account Deactivation & Closure",
        "Minor & Corporate Accounts"
      ]
    },
    {
      title: "Trading and Markets",
      icon: "fa-bar-chart",
      links: [
        "Trading FAQs",
        "Kite Platform & Tools",
        "Margins & Leverage",
        "Orders & Intraday Trading",
        "Corporate Actions (Dividends)",
        "Government Securities & Sovereign Gold"
      ]
    },
    {
      title: "Funds",
      icon: "fa-credit-card",
      links: [
        "Fund Adding (Pay-In)",
        "Fund Withdrawal (Pay-Out)",
        "eMandates & Auto-Pay",
        "Instant Funding Options",
        "Failed Transactions Help",
        "Bank Account Updates"
      ]
    },
    {
      title: "Console",
      icon: "fa-pie-chart",
      links: [
        "Reports & Statements",
        "Tax P&L Statements",
        "Ledger & Account Summary",
        "Portfolio & Holdings",
        "Mutual Fund Statements",
        "Download Financial Docs"
      ]
    },
    {
      title: "Coin",
      icon: "fa-leaf",
      links: [
        "Mutual Funds Basics",
        "Coin App & Web Usage",
        "SIP Creation & Deletion",
        "Lump-sum Investments",
        "Redemption & Payouts",
        "Coin Charges & Taxes"
      ]
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <h1 className="fs-3 mb-4">To create a ticket, select a relevant topic</h1>
        
        
        {ticketTopics.map((topic, index) => (
          <div key={index} className="col-4 p-4 mb-4">
            <h4 className="fs-5 fw-normal mb-3 text-dark">
              <i className={`fa ${topic.icon} me-2`} aria-hidden="true"></i>
              {topic.title}
            </h4>
            
            {/* Links ko loops se render karna */}
            <div className="d-flex flex-column">
              {topic.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex} 
                  href="#" 
                  className="text-decoration-none text-primary fs-6" 
                  style={{ lineHeight: "2.5rem" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Hero;