import React from "react";
import { Link } from "react-router-dom";
export const Pricing = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="fs-3">Unbeatable pricing</h1>
          <p className="mt-5">
            We pioneered the concept of discount booking and price transparency
            in india .Flat fees and no hidden charges .
          </p>
          <Link>See pricing &rarr;</Link>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-3">
              <h1>&#8377;0</h1>
              <p className="pt-3">
                Free equity delievery and directly mutual funds
              </p>
            </div>
            <div className="col-6 border p-3">
              <h1> &#8377;20</h1>
              <p className="pt-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
