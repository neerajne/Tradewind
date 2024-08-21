import React from "react";

export const Universe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col pb-5 text-center">
          <p>
            Want to know more about our technology stack? Check out the
            zerodha.tech blog.
          </p>
        </div>
        <div className="row text-center pb-5">
          <h2>The Zerodha Universe</h2>
          <p className="pt-2">
            Extend your trading and investment experience even further with our
            platform partners{" "}
          </p>
        </div>
        <div className="row pb-2">
          <div className="col text-center">
            <img
              src="/images/smallcaseLogo.png"
              alt="smallcaseLogo"
              style={{ width: "40%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Thematic investment platform
            </p>
          </div>
          <div className="col text-center">
            <img
              src="/images/streakLogo.png"
              alt="smallcaseLogo"
              style={{ width: "35%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Algo and strategy platform
            </p>
          </div>
          <div className="col text-center">
            <img
              src="/images/sensibullLogo.svg"
              alt="smallcaseLogo"
              style={{ width: "35%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Options trading platform
            </p>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col text-center">
            <img
              src="/images/zerodhaFundhouse.png"
              alt="smallcaseLogo"
              style={{ width: "40%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Thematic investment platform
            </p>
          </div>
          <div className="col text-center">
            <img
              src="/images/goldenpiLogo.png"
              alt="smallcaseLogo"
              style={{ width: "35%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Algo and strategy platform
            </p>
          </div>
          <div className="col text-center">
            <img
              src="/images/dittoLogo.png"
              alt="smallcaseLogo"
              style={{ width: "35%" }}
              className="pb-2"
            />
            <p
              style={{ color: "#727272", fontSize: "11px", fontWeight: "400" }}
            >
              Options trading platform
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary p-2 fs-1.9 mb-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp now
        </button>
      </div>
    </div>
  );
};
