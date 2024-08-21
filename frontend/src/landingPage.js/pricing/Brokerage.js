import React from "react";
import { Link } from "react-router-dom";
export const Brokerage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <div className="text-center mb-4">
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <h6 className="fs-8" style={{ color: "#6495ED" }}>
                Brokerage calculator
              </h6>
            </Link>
          </div>
          <div>
            <ul style={{ lineHeight: "2.3rem" }}>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                Digital contract notes will be sent via e-mail.
              </li>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li className="fs-20" style={{ color: "#AAAAAA" }}>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 ">
          <div className="text-center mb-4">
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <h6 className="fs-8" style={{ color: "#6495ED" }}>
                List of charges
              </h6>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
};
