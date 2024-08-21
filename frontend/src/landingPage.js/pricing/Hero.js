import React from "react";
import {OpenAcoount}  from "../OpenAcoount.js"
export const Hero = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col text-center pb-4">
          <h2>Pricing</h2>
          <p
            style={{ color: "#555555", fontWeight: "400", marginTop: "1.2rem" }}
          >
            Free equity investment and flat &#8377;20 traday and F&O trades
          </p>
        </div>
      </div>
      <hr style={{ color: "#B1B1B1" }} className="mb-5" />
      <div className="row mt-5 mb-5">
        <div className="col-4 text-center">
          <img src="/images/pricing0.svg" alt="" />
          <h4>Free equity delievery</h4>
          <p style={{ color: "#AAAAAA" }}>
            All equity delievery investments (NSE,BSE), are absolutely free
            &larr; &#8377;0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="/images/intradayTrades.svg" alt="" />
          <h4>Intraday and F&O trades</h4>
          <p style={{ color: "#AAAAAA" }}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed orders on
            intraday trades across equity,curremcy and commodity trades .
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="/images/pricingEquity.svg" alt="" />
          <h4>Free direct MF</h4>
          <p style={{ color: "#AAAAAA" }}>
            All direct mutual fund investments are absolutely free &rarr;
            &#8377; 0 commissions & DP charges.
          </p>
        </div>
      </div>
      <div>
        <OpenAcoount />
      </div>
      <hr />
    </div>
  );
};
