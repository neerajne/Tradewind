import React from "react";
export const HeroSection = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="images/homeHero.png" alt="home hero" className="mb-5" />
        <h1 className="mt-5"> Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives , mutual funds and
          more
        </p>
        <button
          className="btn btn-primary p-2 fs-1.9"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp now
        </button>
      </div>
    </div>
  );
};
