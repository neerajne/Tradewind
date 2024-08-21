import React from "react";

export const CreateTicket = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="fs-3 text-center">
            To create a ticket, select a relevant topic
          </h2>
        </div>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-plus-circle-fill fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Account opening</h4>
          </div>
          <div className="pt-2">
            {[
              "Online Account Opening",
              "Offline Account Opening",
              "Company, Partnership, and HUF Account Opening",
              "NRI Account Opening",
              "Charges at Zerodha",
              "Zerodha IDFC FIRST Bank 3-in-1 Account",
              "Getting Started",
            ].map((text, index) => (
              <a
                key={index}
                href=""
                className="d-block mt-2 text-decoration-none fs-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-person-fill fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Your Zerodha account</h4>
          </div>
          <div className="pt-2">
            {[
              "Login Credentials",
              "Account Modification and Segment Addition",
              "DP ID and bank details",
              "Your Profile",
              "Transfer and conversion of shares",
            ].map((text, index) => (
              <a
                key={index}
                href=""
                className="d-block mt-2 text-decoration-none fs-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-bar-chart-line-fill fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Trading and investments</h4>
          </div>
          <div className="pt-2">
            {[
              "Margin/leverage, Product and Order types",
              "Kite Web and Mobile",
              "Trading FAQs",
              "Corporate Actions",
              "Sentinel",
              "Kite API",
              "Pi and other platforms",
              "Stockreports+",
              "GTT",
            ].map((text, index) => (
              <a
                key={index}
                href=""
                className="d-block mt-2 text-decoration-none fs-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-credit-card fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Funds</h4>
          </div>
          <div className="pt-2">
            {[
              "Adding Funds",
              "Fund Withdrawal",
              "eMandates",
              "Adding Bank Accounts",
            ].map((text, index) => (
              <a
                key={index}
                href=""
                className="d-block mt-2 text-decoration-none fs-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-person-fill fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Console</h4>
          </div>
          <div className="pt-2">
            {["Reports", "Ledger", "Portfolio", "Refer and Earn", "IPOs"].map(
              (text, index) => (
                <a
                  key={index}
                  href=""
                  className="d-block mt-2 text-decoration-none fs-6"
                >
                  {text}
                </a>
              )
            )}
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <i className="bi bi-bar-chart-line-fill fs-4"></i>
            <h4 className="fs-5 ms-3 mb-0">Reporting and taxation</h4>
          </div>
          <div className="pt-2">
            {[
              "Reports and Statements",
              "Tax P&L",
              "Commodities Settlement",
              "Other FAQs",
            ].map((text, index) => (
              <a
                key={index}
                href=""
                className="d-block mt-2 text-decoration-none fs-6"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
