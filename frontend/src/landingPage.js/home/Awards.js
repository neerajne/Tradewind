import React from "react";

export const Awards = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-6">
          <img src="/images/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 mt-4">
          <h1>Largest stock broker in india</h1>
          <p className="mt-3">
            2+ million zerodha clients contribute to over 15% of all retail
            order volumes in india daily by investing and trading and investing
            in :
          </p>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <ul>
                <li className="mb-2">Future and options</li>
                <li className="mb-2">commodity derivatives</li>
                <li className="mb-2">currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-2">Stocks and IPO's</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and growth</li>
              </ul>
            </div>
            <img
              src="/images/pressLogos.png"
              className="pt-5"
              style={{ width: "90%" }}
              alt="presslogos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
