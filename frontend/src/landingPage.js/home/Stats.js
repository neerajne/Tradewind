import React from "react";
import { Link } from "react-router-dom";
export const Stats = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h2 className="mb-5 ">Trust with confidence</h2>
          <h5 className="fs-5">Customer first always</h5>
          <p className="opacity-75">
            That's why 1.3+ crore customer trust zerodha with &#8377; 3.5+ lakhs
            crore worth of equity investments
          </p>
          <h5 className="mt-4 fs-5">No spam or gimmicks</h5>
          <p className="opacity-75">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like
          </p>
          <h5 className="mt-4 fs-5">The Zerodha universe</h5>
          <p className="opacity-75">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h5 className="mt-4 fs-5"> Do better with money </h5>
          <p className="opacity-75">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="images/ecosystem.png"
            className=""
            style={{ width: "85%" }}
            alt="ecosystem"
          />
          <div className="text-center mt-4">
            <Link to="/" style={{ textDecoration: "none" }} className="mx-5">
              Explore our products &rarr;
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              Try kite demo &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
