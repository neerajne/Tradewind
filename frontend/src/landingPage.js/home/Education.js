import React from "react";
import { Link } from "react-router-dom";
export const Education = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <img style={{ width: "80%" }} src="/images/education.svg" alt="" />
        </div>
        <div className="col-6">
          <h3 className="fs-4 ">Free and open market education</h3>
          <p className="mt-4">
            varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <Link>varsity&rarr;</Link>
          <div className="mt-5">
            <p>
              Trading Q&A, the most active trading and investment community in
              india for all your market related queries
            </p>
            <Link>Trading Q&A&rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
