import React from "react";
import { Link } from "react-router-dom";
export const Team = () => {
  return (
    <div className="container mt-5 ">
      <div className="row text-center mb-5">
        <div className="col">
          <h2>People</h2>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col text-center">
          <img
            src="/images/nithinKamath.jpg"
            alt="nitin Kamath "
            style={{ width: "50%", borderRadius: "50%" }}
          />
          <p className="mt-4" style={{ fontWeight: "600", color: "#636363" }}>
            Nithin Kamath
          </p>
          <p style={{ color: "#636363" }} className="pt-0">
            Founder ,CEO
          </p>
        </div>
        <div className="col" style={{ color: "#535353" }}>
          <p>
            Nithin bootstraped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decades long stint as a trader .
            Today,Zerodha has changed the landscape of the indian broking
            industry .
          </p>
          <p>
            He is the member of SEBI secondary market advisory committee (SMAC)
            and the market data advisary committee(MDAC)
          </p>
          <p>Playing basketball is his Zen</p>
          <p>
            Connect on <Link to={"/"}>Hompage</Link> /{" "}
            <Link to={"/"}>TradingQnA</Link> / <Link to={"/"}>Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
